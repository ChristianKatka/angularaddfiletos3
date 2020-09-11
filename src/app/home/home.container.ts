import { Component, OnInit } from '@angular/core';
import { FileService } from "./file.service";
@Component({
    selector: 'home',
    templateUrl: 'home.container.html',
    styleUrls: ['home.container.scss']
})

export class HomeContainer implements OnInit {
    constructor(private fileService: FileService) { }

    ngOnInit() { }


    addFilesToUpload(file: File[]) {
        if (file) {
            console.log('saatii filu');
            const signedUrl = this.fileService.getSignedUploadURL(file[0].name, file[0].type);
            signedUrl.subscribe((data: any) => {
                // console.log('subscribe sisällä', data.signedUrl);
                console.log('file täs: ', file);
                // console.log('file tyyppi: ', file[0].type);
                
                this.fileService.uploadFile(data.signedUrl, file, file[0].type).subscribe(res => console.log(res));

            })
        }
        else {
            console.log('ei saatu filua');
            
        }
    }

}