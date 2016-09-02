
class HomeController {
    constructor(homeView, requester, baseServiceUrl, appKey) {
        this._homeView = homeView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseServiceUrl;
    }

    showGuestPage() {
        let _that = this;
        let recentPosts = [];
        let requestUrl = this._baseServiceUrl + "/appdata/" + this._appKey + "/posts";
        this._requester.get(requestUrl,
            function success(data) {
                data.sort(function (elem1, elem2) {
                    let date1 = new Date(elem1._kmd.ect);
                    let date2 = new Date(elem2._kmd.ect);
                    return date2-date1;

                });
                let currentId=1;
                for(let i=0; i<data.length && i<5; i++){
                    data[i].postId=currentId;
                    currentId++;
                    recentPosts.push(data[i]);
                }
                _that._homeView.showGuestPage(recentPosts,data);

            },
            function error(data) {
                showPopup('error',"Грешка при зареждане на последни Рецепти!");

            });
    }

    showUserPage() {
        let _that = this;
        let recentPosts = [];
        let requestUrl = this._baseServiceUrl + "/appdata/" + this._appKey + "/posts";
        this._requester.get(requestUrl,
            function success(data) {
                data.sort(function (elem1, elem2) {
                    let date1 = new Date(elem1._kmd.ect);
                    let date2 = new Date(elem2._kmd.ect);
                    return date2-date1;

                });
                let currentId=1;
                for(let i=0; i<data.length && i<5; i++){
                    data[i].postId=currentId;
                    currentId++;
                    recentPosts.push(data[i]);
                }
                _that._homeView.showUserPage(recentPosts,data);

            },
            function error(data) {
                showPopup('error',"Грешка при зареждане на последни Рецепти!");

            });
    }

    //User Salad page
    showUserSaladPage(){
        let _that = this;
        let recentPosts = [];
        let requestUrl = this._baseServiceUrl + "/appdata/" + this._appKey + "/posts";
        this._requester.get(requestUrl,
            function success(data) {
                data.sort(function (elem1, elem2) {
                    let date1 = new Date(elem1._kmd.ect);
                    let date2 = new Date(elem2._kmd.ect);
                    return date2-date1;

                });
                let currentId=1;
                for(let i=0; i<data.length && i<5; i++){
                    data[i].postId=currentId;
                    currentId++;
                    recentPosts.push(data[i]);
                }
                _that._homeView.showUserSaladPage(recentPosts,data);

            },
            function error(data) {
                showPopup('error',"Грешка при зареждане на последни Рецепти!");

            });
    }

}