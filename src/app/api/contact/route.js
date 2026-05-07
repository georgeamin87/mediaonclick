import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullName, email, projectType, mobile, message } = await request.json();

    // Basic validation
    if (!fullName || !email || !mobile || !message) {
      return new Response(JSON.stringify({ error: 'Please fill out all required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Configure the email transporter using Google Workspace SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email headers and options
    const mailOptions = {
      from: `"${fullName}" <${email}>`, // From user (Note: some SMTP servers overwrite this with authenticated user)
      replyTo: email,
      to: process.env.EMAIL_USER || 'info@mediaonclick.me',
      subject: `New Contact Form Submission: ${projectType || 'General Inquiry'} - ${fullName}`,
      text: `
        You have received a new message from your website contact form.

        Name: ${fullName}
        Email: ${email}
        Phone: ${mobile}
        Project Type: ${projectType || 'N/A'}

        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p>You have received a new message from your website contact form.</p>
        <table border="0" cellpadding="5" cellspacing="0">
          <tr>
            <td><strong>Name:</strong></td>
            <td>${fullName}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${mobile}</td>
          </tr>
          <tr>
            <td><strong>Project Type:</strong></td>
            <td>${projectType || 'N/A'}</td>
          </tr>
        </table>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
