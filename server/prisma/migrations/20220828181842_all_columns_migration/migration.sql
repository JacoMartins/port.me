BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[accounts] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [first_name] NVARCHAR(1000),
    [last_name] NVARCHAR(1000),
    [email] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [priv_level] INT,
    CONSTRAINT [accounts_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [accounts_username_key] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [accounts_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[profiles] (
    [username] NVARCHAR(1000) NOT NULL,
    [first_name] NVARCHAR(1000) NOT NULL,
    [last_name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [greeting] NVARCHAR(1000) NOT NULL,
    [color] NVARCHAR(1000),
    [description] NVARCHAR(1000) NOT NULL,
    [profile_picture] NVARCHAR(1000),
    [profile_cover] NVARCHAR(1000),
    [profile_animation] NVARCHAR(1000),
    [id] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [profiles_pkey] PRIMARY KEY CLUSTERED ([username]),
    CONSTRAINT [profiles_username_key] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[sections] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [sections_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[section_components] (
    [id] NVARCHAR(1000) NOT NULL,
    [section_id] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [value] INT,
    [description] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [section_components_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[component_items] (
    [id] NVARCHAR(1000) NOT NULL,
    [component_id] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [title] NVARCHAR(1000) NOT NULL,
    [value] INT,
    [description] NVARCHAR(1000) NOT NULL,
    [icon] NVARCHAR(1000),
    [path] NVARCHAR(1000),
    CONSTRAINT [component_items_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[account_tokens] (
    [id] NVARCHAR(1000) NOT NULL,
    [refresh_token] NVARCHAR(1000) NOT NULL,
    [account_id] NVARCHAR(1000) NOT NULL,
    [expires_date] DATETIME2 NOT NULL,
    [created_at] DATETIME2 NOT NULL,
    CONSTRAINT [account_tokens_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[accounts] ADD CONSTRAINT [accounts_username_fkey] FOREIGN KEY ([username]) REFERENCES [dbo].[profiles]([username]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[sections] ADD CONSTRAINT [sections_username_fkey] FOREIGN KEY ([username]) REFERENCES [dbo].[profiles]([username]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[section_components] ADD CONSTRAINT [section_components_section_id_fkey] FOREIGN KEY ([section_id]) REFERENCES [dbo].[sections]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[component_items] ADD CONSTRAINT [component_items_component_id_fkey] FOREIGN KEY ([component_id]) REFERENCES [dbo].[section_components]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[account_tokens] ADD CONSTRAINT [account_tokens_account_id_fkey] FOREIGN KEY ([account_id]) REFERENCES [dbo].[accounts]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
