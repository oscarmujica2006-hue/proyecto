jQuery(document).ready( function() {
    jQuery('#wp-admin-bar-stack-cache-purge-cache > a').click( function(e) {
        e.preventDefault();

        const params = new Proxy(new URLSearchParams(jQuery(this).attr('href')), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let nonce = params.nonce;

        jQuery.ajax({
            type : "post",
            dataType : "json",
            url : myAjax.ajaxurl,
            data : {action: "purge-all-cache", nonce: nonce},
            success: function(response) {
                if(response === true) {
                    jQuery('body').prepend('<div style="z-index: 20002;outline: 0;background: #fff;border: 1px solid #c3c4c7;border-left-width: 4px;box-shadow: 0 1px 1px rgba(0,0,0,.04);margin: auto; top: 10px; width: 50%; padding: 1px 12px;border-left-color: #00a32a;padding-right: 38px;position: relative;"><p style="font-size: 13px; line-height: 1.5; margin: 0.5em 0; padding: 2px;"><strong style="font-weight: 600;">Full CDN Cache Purge Requested. Please allow a few minutes for all caches to clear globally.</strong></p><button style="box-sizing: border-box; font-family: inherit; font-size: inherit; font-weight: inherit; position: absolute; top: 0; right: 1px; border: none; margin: 0; padding: 9px; background: 0 0; color: #787c82; cursor: pointer;" onclick="jQuery(this).parent().remove();" type="button"><span style="color: #787c82; cursor: pointer; border: 0; clip: rect(1px,1px,1px,1px); -webkit-clip-path: inset(50%); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; word-wrap: normal!important;" class="screen-reader-text">Dismiss this notice.</span><img src="https://js.stackcdn.net/stackcache/close.png"></img></button></div>');
                }
                else {
                    jQuery('body').prepend('<div style="z-index: 20002;outline: 0;background: #fff;border: 1px solid #c3c4c7;border-left-width: 4px;box-shadow: 0 1px 1px rgba(0,0,0,.04);margin: auto; top: 10px; width: 50%; padding: 1px 12px;border-left-color: #e80909;padding-right: 38px;position: relative;"><p style="font-size: 13px; line-height: 1.5; margin: 0.5em 0; padding: 2px;"><strong style="font-weight: 600;">Error occurred when requesting CDN Cache Purge. Please contact Support Team.</strong></p><button style="box-sizing: border-box; font-family: inherit; font-size: inherit; font-weight: inherit; position: absolute; top: 0; right: 1px; border: none; margin: 0; padding: 9px; background: 0 0; color: #787c82; cursor: pointer;" onclick="jQuery(this).parent().remove();" type="button"><span style="color: #787c82; cursor: pointer; border: 0; clip: rect(1px,1px,1px,1px); -webkit-clip-path: inset(50%); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; word-wrap: normal!important;" class="screen-reader-text">Dismiss this notice.</span><img src="https://js.stackcdn.net/stackcache/close.png"></img></button></div>');
                }
            }
        });
    });
});
