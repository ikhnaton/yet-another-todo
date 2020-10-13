import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';

export const classNames = (...classes: (string | string[] | null | undefined)[]): string | undefined =>
{
	const myClasses = Array.from(new Set(flattenDeep(compact(classes))));

	if (myClasses.length === 0)
	{
		return null as unknown as undefined;
	}

	return myClasses.join(" ");
};
