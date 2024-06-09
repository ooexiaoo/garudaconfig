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
    } catch (error) {
        
    }
}