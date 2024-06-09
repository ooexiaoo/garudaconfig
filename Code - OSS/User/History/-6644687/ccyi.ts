import nodemailer from 'nodemailer'

export const sendEmail = async({email, emailType, userId}) => {
    try {
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
            subject: emailType === 'VERIFY' ? "Verify your email" :"Rest your password",
            text: "",
            html: "",
        }
    } catch (error) {
        
    }
}