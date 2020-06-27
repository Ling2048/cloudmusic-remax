const request = (url: string) => {
    return fetch(url,{
        body: "params=k58%2FWRjVUBaC0an3ntpuK%2FqfIz0gXYNG%2FDc7uS74S3U%3D&encSecKey=7beee1b32f26bcea16e812035f6cd0e232bee8bb7d4ff844634e1041451785edbb9baf1402880c33b462d94b5853a09df3e3aebc9e2f851b2db850360cc69a546fd86fa7019fb3ec467e19e1660a4335f1c48aa3fb9833b892ce7d309e4cbafe50e640f4c4326a11ce35856b28501de36d9ce32a615ca44afc7d9b8e017a8f6e",
        headers: {
            Accept: "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    }).then(res => res.json());
}

export {request}