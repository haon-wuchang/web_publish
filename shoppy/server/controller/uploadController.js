// 8. 파일 업로드 함수
export const fileUpload = (req,res) => {
    console.log(` ${JSON.stringify(req.file)}`); 
}