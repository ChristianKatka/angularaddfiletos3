import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  IMAGE_UPLOAD_HEADERS = new HttpHeaders({
    'Content-Type': 'image/jpeg',
  });
  HEADERS = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
  });

  constructor(private http: HttpClient) {}

  getSignedUploadURL(key: string, contentType: string) {
    // console.log('tässä on key:', key);
    return this.http.get(
      `https://41kpbf5qdd.execute-api.eu-west-1.amazonaws.com/get-signed-url/?key=${key}&contenttype=${contentType.replace('/','-')}`,
    );
  }

//   this.http.get(StaticSettings.BASE_URL, {params: params}).subscribe(...);

  uploadFile(uploadURL: string, file: File[], contentType: string): Observable<any> {
    if (file.length >= 1) {
        const headers = new HttpHeaders({
            'Content-Type': contentType,
          });
          console.log('upload file sai filun: ', file[0]);
      return this.http.put(uploadURL, file[0], {headers});
    }
  }

}
