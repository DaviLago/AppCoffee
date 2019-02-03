export abstract class HttpMethod {

    // public static readonly BASE:string = "https://ws-coffee-app.herokuapp.com";
    public static readonly BASE:string = "http://localhost:8100";
    public static readonly VERSION:string = "/v1";
    public static readonly BASE_VERSION:string = HttpMethod.BASE + HttpMethod.VERSION;

    public static readonly POST_AUTH:string = HttpMethod.BASE + "/auth";
    public static readonly POST_USER:string = HttpMethod.POST_AUTH + "/user";
    public static readonly GET_USER:string = HttpMethod.BASE_VERSION + "/user";

    public static readonly GET_ARTICLE:string = HttpMethod.BASE_VERSION + "/article";
    public static readonly GET_ARTICLE_BY_THEME:string = HttpMethod.GET_ARTICLE + "/theme";

    public static readonly GET_ANNOTATION:string = HttpMethod.BASE_VERSION + "/annotation";
    public static readonly POST_ANNOTATION:string = HttpMethod.BASE_VERSION + "/annotation";
    public static readonly PUT_ANNOTATION:string = HttpMethod.BASE_VERSION + "/annotation";
    public static readonly DELETE_ANNOTATION:string = HttpMethod.BASE_VERSION + "/annotation";

}