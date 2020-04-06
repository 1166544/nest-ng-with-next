import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

/** next compose props */
type NextComposedProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps;

/** nextd compose */
// tslint:disable-next-line: typedef
const NextComposed: any = React.forwardRef<HTMLAnchorElement, NextComposedProps>(function NextComposed(props: any, ref: any): any {
const { as, href, ...other } = props;

return (
	<NextLink href={href} as={as}>
		<a ref={ref} {...other} />
	</NextLink>
);
});

/** link porps base */
interface ILinkPropsBase {
	activeClassName?: string;
	innerRef?: React.Ref<HTMLAnchorElement>;
	naked?: boolean;
}

/** link props */
type LinkProps = ILinkPropsBase & NextComposedProps & Omit<MuiLinkProps, 'ref'>;

/** link */
function Link(props: LinkProps): any {
	const {
		href,
		activeClassName = 'active',
		className: classNameProps,
		innerRef,
		naked,
		...other
	} = props;

	const router: any = useRouter();
	const pathname: any = typeof href === 'string' ? href : href.pathname;
	const className: any = clsx(classNameProps, {
	[activeClassName]: router.pathname === pathname && activeClassName,
	});

	if (naked) {
		return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
	}

	return (
		<MuiLink component={NextComposed} className={className} ref={innerRef} href={href} {...other} />
	);
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref): any => (
	<Link {...props} innerRef={ref} />
));
