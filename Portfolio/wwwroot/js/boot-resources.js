﻿import { BrotliDecode } from '/decode.min.js';

Blazor.start({
    loadBootResource: function (type, name, defaultUri, integrity) {
        if (type !== 'dotnetjs' && location.hostname !== 'localhost') {
            return (async function () {
                const response = await fetch(defaultUri + '.br', { cache: 'no-cache', contentType: 'text/javascript; charset=utf-8' });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const originalResponseBuffer = await response.arrayBuffer();
                const originalResponseArray = new Int8Array(originalResponseBuffer);
                const decompressedResponseArray = BrotliDecode(originalResponseArray);
                const contentType = type === 'dotnetwasm' ? 'application/wasm' : 'application/octet-stream';
                return new Response(decompressedResponseArray, { headers: { 'content-type': contentType } });
            })();
        }
    }
});