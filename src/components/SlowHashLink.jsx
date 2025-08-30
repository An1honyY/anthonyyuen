import { HashLink } from 'react-router-hash-link';
import { useCallback } from 'react';

export default function SlowHashLink({ to, children, offset = 0, ...props }) {
    // Custom scroll function that waits for the element to exist
    const scrollWithOffset = useCallback(
        (el) => {
            if (!el) return;

            // Wait a tick to let images/render settle
            setTimeout(() => {
                const y =
                    el.getBoundingClientRect().top + window.pageYOffset + offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }, 150); // adjust delay if needed
        },
        [offset]
    );

    return (
        <HashLink to={to} scroll={scrollWithOffset} {...props}>
            {children}
        </HashLink>
    );
}