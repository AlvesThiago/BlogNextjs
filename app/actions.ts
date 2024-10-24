import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {parseWithZod} from '@conform-to/zod';
import { siteSchema } from "./utils/zodSchemas";
import prisma from "./utils/db";

export async function createSiteAction(formData: FormData) {
    const {getUser} = getKindeServerSession()

    const user = await getUser();

    if(!user){
        return redirect("/api/auth/login");
    }

    const submission = parseWithZod(formData, {
        schema: siteSchema,
    });

    if(submission.status !== 'success'){
        return submission.reply();
    }

    const response = await prisma
}