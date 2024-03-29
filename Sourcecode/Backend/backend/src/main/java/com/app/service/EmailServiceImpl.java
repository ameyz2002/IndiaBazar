package com.app.service;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.app.pojos.User;


@Service
public class EmailServiceImpl {

	@Autowired
	private TemplateEngine templateEngine;

	@Autowired
	private JavaMailSender javaMailSender;



	public String sendMail(User u) throws MessagingException {
		Context context = new Context();
		context.setVariable("User", u);

		String process = templateEngine.process("/home", context);
		javax.mail.internet.MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
		helper.setSubject("Welcome " + u.getFirstName());
		helper.setText(process, true);
		helper.setTo(u.getEmail());
		javaMailSender.send(mimeMessage);
		return "Sent";
	}

}
