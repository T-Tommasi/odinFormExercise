class validators {
	static required(origin: HTMLInputElement) {
		origin.setCustomValidity("");

		if (origin.validity.valueMissing) {
			origin.setCustomValidity(
				"Warning - you dummy, ya missed the bloody thing needed, fix dat"
			);
			return;
		} else if (origin.validity.tooLong) {
			origin.setCustomValidity(
				"Warning - how long have you got? this is way too long!"
			);
			return;
		} else if (origin.validity.typeMismatch) {
			origin.setCustomValidity(
				"Warning - where did you put that? wrong place bud'"
			);
			return;
		}
	}

	static passwordCheck(origin: HTMLInputElement) {
		let text: string = origin.value.trim();
		let passwordRegex: RegExp =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

		origin.setCustomValidity("");
		if (!passwordRegex.test(text)) {
			origin.setCustomValidity(
				"You silly goose. you didnt repsect my arcane and frankly illogical password rules."
			);
			return;
		}
	}

	static mailCheck(origin: HTMLInputElement) {
		let text: string = origin.value;
		origin.setCustomValidity("");
		if (!origin.value.endsWith("@gmail.com")) {
			origin.setCustomValidity(
				"We only accept google stuff. we are very googleitarian here"
			);
			return;
		} else if (!origin) {
			throw new Error("Something went very wong with our mail check, ya know");
		}
	}
}

export { validators };
