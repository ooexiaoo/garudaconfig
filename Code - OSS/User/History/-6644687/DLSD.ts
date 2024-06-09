import User from '@/models/userModel';
import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'

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
        
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "6b74ff9f39e00e",
              pass: "448d58f9bb4417"
            }
          });

        const mailOptions = {
            from: "vpaherwar@gmail.com",
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Rest your password",
            text: "",
            html: `<p>Click <a href="${process.env.DOMIAN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"} or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
        }

        const mailResponse = await transport.sendMail(mailOptions)
        return mailResponse
    } catch (error:any) {
        throw new Error(error.message)
    }
}