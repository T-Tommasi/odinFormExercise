import { validators } from "./validators";
import { name, password, mail, submitButton, form } from "./domSelector";

form.addEventListener("submit", (e) => {
	e.preventDefault();

	validators.required(name);
	validators.required(password);
	validators.required(mail);
	validators.passwordCheck(password);
	validators.mailCheck(mail);

	form.reportValidity();
});

mail?.addEventListener("input", () => validators.mailCheck(mail));
password?.addEventListener("input", () => validators.passwordCheck(password));
name?.addEventListener("input", () => validators.required(name));

form?.addEventListener("submit", (e) => {
	if (!form.checkValidity()) {
		e.preventDefault();
	}
});
