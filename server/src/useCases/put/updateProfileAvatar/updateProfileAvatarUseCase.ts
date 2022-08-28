import { env } from "process";
import { prisma } from "../../../prisma";
import { deleteFile } from "../../../utils/file";

interface IUpdateProfileAvatar {
  account_id: string;
  avatar_file: string;
}

export class UpdateProfileAvatarUseCase {
  async execute({ account_id, avatar_file }: IUpdateProfileAvatar) {
    const profile = await prisma.profile.findFirst({
      where: {
        account: {
          id: account_id
        }
      }
    });


    if (!profile) {
      throw new Error("Profile doens't exists.")
    }

    const result = await prisma.profile.update({
      where: {
        username: profile.username
      },
      data: {
        profile_picture: avatar_file
      }
    });

    return result;
  }
}