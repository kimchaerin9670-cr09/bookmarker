package com.min.edu.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateBookmarkRequest {
	
	@NotEmpty(message = "제목은 필수 입력값 입니다.")
	private String title;
	@NotEmpty(message = "URL은 필수 입력값 입니다.")
//	@Pattern(
//			regexp = "^(https?|ftp))://[^\\s/$.?#].[^\\s]*$",
//			message = "올바른 URL 형식이 아닙니다."
//			)
	private String url;

}
