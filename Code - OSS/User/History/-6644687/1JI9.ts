import User from '@/models/userModel';
import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'
import logger from '@/helpers/logger';

export const sendEmail = async({email, emailType, userId}:any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType == "VERIFY"){
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000
            })
        } else if(emailType == "RESET"){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }
        
        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Rest your password",
            text: "",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"} or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
        }

        const mailResponse = await transport.sendMail(mailOptions)
        logger.info(`mail sent to ${email}`)
        return mailResponse
    } catch (error:any) {
        logger.error(`failed to send mail to ${email}`, error.message)
        throw new Error(error.message)
    }
}

