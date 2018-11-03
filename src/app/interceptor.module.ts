import { HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const dupReq = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', 'https://ws-coffee-app.herokuapp.com')
    });
    return next.handle(dupReq);
  }
}
