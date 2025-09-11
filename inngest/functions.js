import { inngest } from "./client";
import prisma from "@/lib/prisma";
//Inngest function to sync user creation from clerk to our database
export const synUserCreation = inngest.createFunction(
  { id: "sync-user-create" },
  { event: "clerk/user.creted" },
  async ({ event, }) => {
    const {data} = event
    await prisma.user.create({
      data: {
        id: data.id,
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url,
      },
    });
  },
);

//Inngest function to sync user updation from clerk to our database
export const synUserUpdation = inngest.createFunction(
  { id: "sync-user-update" },
  { event: "clerk/user.updated" },
  async ({ event, }) => {
    const {data} = event
    await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url,
      },
    });
  },
);

//Inngest function to sync user deletion from clerk to our database
export const synUserDeletion = inngest.createFunction(
 { id: "sync-user-delete" },
  { event: "clerk/user.deleted" },
  async ({ event, }) => {
    const {data} = event
    await prisma.user.delete({
        where: {id: data.id,}
    });
  },
);