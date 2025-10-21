import { validators } from "./validators";
import { name, password, mail, submitButton, form } from "./domSelector";

form.addEventListener("submit", (e) => {
	e.preventDefault();

	validators.required(name);
	validators.required(password);
	validators.required(mail);
	validators.passwordCheck(password);
	validators.mailCheck(mail);
});
