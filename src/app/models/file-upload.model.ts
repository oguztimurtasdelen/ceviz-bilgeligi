export interface FileUploadModel {
  id: string,
  companyName: string,
  uploadDate: string,
  fileName: string,
  fileSize: number,
  fileType: string,
  companyEvaluation: string | null
}
