import { classNames } from './classNames';

const commonExpectations = "red bold italic bubba";

describe("The className utility", () =>
{
	it("should trim classname list into a clean result of 4 spaced classes", () =>
	{
		const class1 = "red";
		const class2 = "bold";
		const class3 = "italic";
		const class4 = "bubba";

		const result = classNames(class1, class2, class3, class4);

		expect(result).toBe(commonExpectations);
	});

	it("should trim classname array into a clean result of 4 spaced classes", () =>
	{
		const class1 = [
			"red",
			"bold",
			"italic",
			"bubba"
		];

		const result = classNames(class1);

		expect(result).toBe(commonExpectations);
	});

	it("should trim 2 classname arrays into a clean result of 4 spaced classes", () =>
	{
		const class1 = ["red", "bold"];

		const class2 = ["italic", "bubba"];

		const result = classNames(class1, class2);

		expect(result).toBe(commonExpectations);
	});

	it("should trim classname list into a clean result of 3 spaced classes", () =>
	{
		const class1 = "red";
		const class2 = "bold";
		const class3 = "";
		const class4 = "bubba";

		const result = classNames(class1, class2, class3, class4);

		expect(result).toBe("red bold bubba");
	});

	it("should trim classname list into a clean result of 2 spaced classes", () =>
	{
		const class1 = "red";
		const class2 = null;
		const class3 = "bubba";

		const result = classNames(class1, class2, class3);

		expect(result).toBe("red bubba");
	});

	it("should trim classname list into a clean result of 1 class", () =>
	{
		const class1 = "";
		const class2 = "bubba";
		const class3 = null;

		const result = classNames(class1, class2, class3);

		expect(result).toBe("bubba");
	});

	it("should trim classname list into a clean result of 1 class plus 2 extra spaces", () =>
	{
		const class1 = " ";
		const class2 = "bubba";
		const class3 = null;

		const result = classNames(class1, class2, class3);

		expect(result).toBe("  bubba");
	});

	it("should trim classname list into a clean result of null", () =>
	{
		const class1 = "";
		const class2 = null;

		const result = classNames(class1, class2);

		expect(result).toBe(null);
	});
});
