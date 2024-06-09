import nodemailer from 'nodemailer'

export const sendEmail = async({email, emailType, userId}:any) => {
    try {
        //TODO: Configuremail for useage
        
        const transporter = nodemailer.createTransport({
            host: "smtp.forward.net",
            port: 465,
            secure: true,
            auth: {
                user: "",
                pass: "",
            },
        });

        const mailOptions = {
            from: "vpaherwar@gmail.com",
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Rest your password",
            text: "",
            html: "<b>HelloWorld</b>",
        }

        const mailResponse = await transporter.sendEmail(mailOptions)
        return mailResponse
    } catch (error:any) {
        throw new Error(error.message)
    }
}