import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "logicalmindsit.careers@gmail.com",
    pass: "ypko ptha mqba yxbs"
  },
});

export const sendOtpEmail = async (recipient, otp) => {
  try {
    await transporter.sendMail({
      from:"logicalmindsit.careers@gmail.com",
      to: recipient,
      subject: "Your OTP for verification",
      html: `<h1>Hello,</h1> <p>Your OTP code is <b>${otp}</b>. This code will expire in 2 minutes.</p>
       <p>Best regards,
       <br/> Your team</p>`,
    });
    console.log("OTP email sent successfully");
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw error;
  }
};

export default transporter;
