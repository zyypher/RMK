import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
      // Configure the transporter
      const transporter = nodemailer.createTransport({
        service: "gmail", // Use your email service (e.g., Gmail, Outlook)
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASSWORD, // Your email password or app password
        },
      });

      // Email options
      const mailOptions = {
        from: email, // Sender email
        to: process.env.EMAIL_RECEIVER, // Receiver email
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
