import {h} from 'preact';

export function NotFound(props: any) {
    return (
        <div data-component="NotFound" class="container not-found">
            <p>Ooop! Looks like you're lost!</p>
            <a href="/">Back home</a>
        </div>
    )
}
