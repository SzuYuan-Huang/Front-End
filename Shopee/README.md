# Shopee
![Shopee](https://raw.githubusercontent.com/SzuYuan-Huang/Shopee/master/%E8%9D%A6%E7%9A%AE%E8%B3%BC%E7%89%A9.png)

```HTML
<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"
        crossorigin="anonymous">
    <style type="text/css">
        li a {
            font-size: 12px;
            color: rgb(255, 255, 255);
        }
    </style>
</head>

<body>
    <!-- First navigation -->
    <div class="row fixed-top" style="background-color:rgb(255, 51, 0);">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: rgb(255,255,255);">賣家中心</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: rgb(255,255,255);">下載</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="color: rgb(255,255,255);">追蹤我們</a>
                        </li>
                        <li>
                            <i class="fab fa-facebook-square" style="color: rgb(255,255,255); padding-top: 12px; padding-right: 10px;"></i>
                        </li>
                        <li>
                            <i class="fab fa-instagram" style="color: rgb(255,255,255); padding-top: 12px; padding-right: 10px;"></i>
                        </li>
                        <li>
                            <i class="fab fa-line" style="color: rgb(255,255,255); padding-top: 12px;"></i>
                        </li>
                    </ul>
                </div>
                <div class="col-8 ">
                    <ul class="nav" style="padding-left: 300px;">
                        <li>
                            <i class="far fa-bell" style="color: rgb(255,255,255); padding-top: 12px;"></i>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#a" style="color: rgb(255,255,255);">通知中心</a>
                        </li>
                        <li>
                            <i class="far fa-question-circle" style="color: rgb(255,255,255); padding-top: 12px;"></i>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#a" style="color: rgb(255,255,255);">幫助中心</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#a" style="color: rgb(255,255,255);">通知</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#a" style="color: rgb(255,255,255);">登入</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Second navigation -->
    <div class="row fixed-top" style="background-color:rgb(255, 71, 26); top:34px">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <a class="header-with-search__logo-section" href="/">
                        <svg class="shopee-svg-icon icon-shopee-logo icon-shopee-logo--tw header-with-search__shopee-logo" height="45" viewBox="0 0 180 45"
                            width="180">
                            <g fill-rule="evenodd" stroke-width="1">
                                <path d="m25.8821706 35.1342698c-.7124113 1.2695001-2.0184919 2.0560633-3.3830765 2.4584901-3.0729268.905553-6.4486543-.0560681-8.9392658-1.9628781-.3202651-.2452049-.4993279-.6431313-.269358-1.0273091.1900865-.3170447.702874-.5178659 1.0273092-.269358 2.5344998 1.9403352 6.3838332 3.0138861 9.2074264 1.1661995 1.1712777-.7663738 1.7550793-2.2728627 1.3377479-3.626341-.392683-1.2734637-1.5260178-2.1460282-2.7336696-2.7677315-1.4627656-.753038-2.9232192-1.139982-4.5045206-1.8647796-1.5632175-.7164988-2.6290889-1.5261828-3.2760187-2.8360206-.8089409-1.6381126-.2773677-3.6587101.9434135-4.9472024 2.4765326-2.6133172 6.7916686-2.183228 9.5427613-.258582.7871413.5507718.0356722 1.8521457-.7579099 1.2966671-1.4090922-.9857329-3.3125992-1.6033487-5.0286208-1.3217697-1.8698166.3066816-3.85532 1.7714291-3.5777459 3.8926437.172911 1.3201595 1.5949261 2.1975547 2.6654217 2.7529507.5788884.3003646 1.1403949.4733582 1.749423.7213293 2.0489207.8342913 4.7706169 1.8631694 5.9973847 3.9604787.8208316 1.403023.7919719 3.2206112-.0007019 4.6332129m-6.2403601-32.92723554c5.618533.14058305 6.2123261 9.19999474 6.2518792 9.94316504h-12.5946316c.0209739-.7431703.3947886-9.79556316 6.3427524-9.94316504m17.528457 9.94316504h-9.043516c-.0157305-3.88100069-2.1157647-12.10876342-8.5010017-12.14043074-7.0406307-.03501158-8.5445598 8.87873867-8.5600425 12.14043074h-9.03810739c-2.43759873 0-1.99644456 2.4581598-1.99644456 2.4581598l1.74698704 23.9800839s-.07270683 5.2827438 4.57223168 5.4228314c.29941508 0 25.96071543-.0063582 26.55062753.0009083 4.4915152-.2890932 4.5548911-5.4343505 4.5548911-5.4343505l1.7531801-23.9828502s.4089914-2.5273572-2.0388053-2.4447827"></path>
                                <path d="m50.4616792 31.8347339h1.6102024v-12.2623107h-1.6102024zm5.4499159 0h-1.6102025v-12.2646641c0-.0002477.965626-.0009083.9697548-.0009083.363369 0 .6404477.2426864.6404477.7018831zm2.229511 7.1014055c0-.6156754-.5191458-1.1117829-1.1348211-1.1117829-.6156754 0-1.0946899.4961075-1.0946899 1.1117829zm-2.229511 0v1.6514896h-1.6102025v-6.5233841h3.8397135v-14.5011526c0-1.2313507-.9896139-2.2201802-2.2209233-2.2201802h-1.6187902v-2.8997268c0-.615634-.4990801-1.1147555-1.1147555-1.1147555-.615634 0-1.1147555.4991215-1.1147555 1.1147555v2.8997268h-2.7444042c-.6156753 0-1.0953092.4985435-1.0953092 1.1141775v13.3768598 2.2302955h3.8397134v6.5233841h-2.7444042c-.6157166 0-1.1147555.4990802-1.1147555 1.1147555 0 .6156754.4990389 1.1147555 1.1147555 1.1147555h8.8136287v-3.8810006z"></path>
                                <path d="m78.0828519 24.8984814h-8.38131v-2.229511h6.151799v-3.5507027c0-.6156341-.4991215-1.1147556-1.1147555-1.1147556h-5.0370435v-2.229511h6.151799c1.2386172 0 2.229511 1.0046425 2.229511 2.2359518z"></path>
                                <path d="m76.3500181 31.0414903c-.0084639.4191068-.3689015 2.4134457-2.3240588 4.7601712-1.7754339-2.5016352-2.0683256-4.7659101-2.0683256-4.7659101l-2.2146889-.0029727s.2296809 3.0777574 2.7598456 6.3496474c-1.3351881 1.210831-2.4300844 2.3410692-4.8477414 3.5107368l.9245039 1.9309629c2.5948205-1.2540999 3.8617195-2.4872672 5.355079-3.8366581 1.5014106 1.4663163 2.711168 2.7527442 5.4700641 3.8442137l.9287152-1.9309217c-2.5411472-.9124893-3.5630064-2.0794319-4.903727-3.4312175 3.0737939-3.530761 3.210083-6.8144179 3.1674333-7.5397521.0007432-.0242769 0 .0244833 0 0 0-1.2313507-.9982016-2.2237721-2.229511-2.2237721h-6.6660728v2.229511h5.5737775-.000578c.5780214.0165975 1.0748721.5056449 1.0748721 1.1059613"></path>
                                <path d="m65.8205412 22.6276832h-3.9222879v-4.6654583h2.8075324c.6193086 0 1.1147555.5005252 1.1147555 1.1147142zm2.2295111-4.526857v-.2146937c0-1.2313507-.9876734-2.229511-2.2190241-2.229511l-6.1622859-.0064821v27.1670048h2.229511v-7.2252673h7.5142779s-.7530793-1.1601714-1.032181-2.229511h-6.4820969v-3.1791176h6.151799v-2.229511h-6.151799v-3.1791176h6.151799z"></path>
                                <path d="m114.619761 41.3679001 1.479074 1.3552124c2.170759-2.0833955 3.070449-3.4979377 3.441746-4.3236825h-2.368732c-.862449 1.5689152-2.552088 2.9684701-2.552088 2.9684701"></path>
                                <path d="m123.511881 38.3994093h-2.368732c.371214.8257449 1.270945 2.2403283 3.441704 4.3237238l1.479116-1.3552537s-1.689639-1.3995549-2.552088-2.9684701"></path>
                                <path d="m122.673073 21.6367894h-4.706746v-4.4177348l3.583361-.0020644c.612661 0 1.123385.5083285 1.123385 1.1209899zm-4.706746 6.6472458h4.706746v-4.4177348h-4.706746zm0 6.6885331h4.706746v-4.459022h-4.706746zm-2.229511 2.229511h9.165768v-2.1882237l-.01796-17.8773755c-.032741-1.19733-1.017277-2.1469366-2.227901-2.1469366h-5.80222c-.615634 0-1.114673.4954469-1.114673 1.1147555h-.003014z"></path>
                                <path d="m137.37133 35.8396004v-2.229511h5.408629v1.0831707 1.1463403zm-7.720714-1.2495997v-.9799113h5.491203v2.229511h-5.491203zm0-3.2094224h5.491203v-2.1882238h-5.491203zm7.720714 0v-2.1882238h4.293874v-.000578s.00611-.0000826.007142-.0000826c.605725 0 1.107613.4910705 1.107613 1.0967956v.0186206 1.0724773.0009909zm7.63814-2.1882238c0-1.2253227-.993412-2.229511-2.218694-2.229511h-.010817l-14.244098-.0201482c-.619309.0019818-1.115581.5079157-1.115581 1.1193797l.000825 14.6312074h2.229511v-4.624171h13.129343v.1773287c0 1.2312681-.990068 2.2234005-2.221419 2.2234005-.002683 0-.005367-.0001651-.008092-.0001651v2.174599c.082574.0046242.156231.007184.238145.007184 2.337229 0 4.22385-1.8947128 4.22385-4.2319836 0-.0523935-.001032-.1045805-.002973-.1566025z"></path>
                                <path d="m132.994875 19.3246997h6.399522v-1.4450534h-6.399522zm0 3.7158518h6.399522v-1.4863407h-6.399522zm13.331939 1.110379c0-.6143954-.497016-1.1170263-1.110916-1.1191319v.0087529h-3.59199v-1.4863407h2.222327c.615675 0 1.114756-.4990802 1.114756-1.1147556 0-.6156753-.499081-1.1147555-1.114756-1.1147555h-2.222327v-1.4450534h2.972681v-.0193637c.619309-.0011561 1.112526-.4997821 1.112526-1.114673 0-.6149321-.493217-1.1134756-1.112526-1.1147142v.0192399h-2.972681v-1.2409707c0-.6156753-.49908-1.1147555-1.114755-1.1147555-.615676 0-1.114756.4990802-1.114756 1.1147555v1.2409707h-6.399522v-1.2409707c0-.6156753-.499081-1.1147555-1.114756-1.1147555s-1.114755.4990802-1.114755 1.1147555v1.2409707h-3.065785c-.615675 0-1.114755.4990801-1.114755 1.1147555 0 .6156753.49908 1.1147555 1.114755 1.1147555h3.065785v1.4450534h-2.202964c-.615675 0-1.114755.4990802-1.114755 1.1147555 0 .6156754.49908 1.1147556 1.114755 1.1147556h2.202964v1.4863407h-3.558795c-.615676 0-1.114756.4991214-1.114756 1.1147555 0 .6156753.49908 1.1147555 1.114756 1.1147555h18.009329-.002106-.001734.001734c.614891 0 1.113022-.5040759 1.113022-1.119132z"></path>
                                <path d="m145.213809 23.0317449c.002406 0 .004545.0001336.006817.0001336s-.003609-.0001336-.006817-.0001336"></path>
                                <path d="m145.217689 23.0405556h-.005614z"></path>
                                <path d="m161.090851 29.810214-1.711646-1.4692065s-.744945.8331765-2.066137 1.9632083v-7.8416857h3.385554v-2.2295111h-3.385554v-5.8495763c0-.6156754-.49908-1.1147555-1.114756-1.1147555-.615675 0-1.114755.4990801-1.114755 1.1147555v5.8495763h-1.932449c.071179-.867032.111929-1.8390163.111929-2.8605039 0 0-.000454.0036746-.001527.0037571.000991-.0191985.001527-.0367456.001527-.0561919 0-.6156753-.499121-1.1138885-1.114755-1.1138885-.615676 0-1.114756.5087001-1.114756 1.1243342 0 .0287772.001404.0536734.003551.0949606h-.003551s.264486 5.4269602-2.313448 11.1694787l1.836539 1.0901483s1.598106-2.3506891 2.338179-7.2225835h2.188761v9.5560971c-1.65149 1.147455-3.72382 2.3326466-6.113732 3.1787047l.981893 1.8365391s2.241732-.6969286 5.131839-2.4241391v8.1661209h2.229511v-9.6414792c1.238617-.9169896 2.550065-2.0172946 3.777783-3.3241596"></path>
                                <path d="m177.007074 34.3119725v.0412872c-.024277 3.4188313-2.8174 6.1818974-6.234374 6.194779v2.2353738c4.661743-.0149873 8.463885-3.7983023 8.463885-8.4635955v-.0078445-14.0217665c0-.0431865-.005409-.0863729-.005409-.1299309 0-1.8469848-1.501658-3.3508313-3.348601-3.3508313-.0436 0-.091121-.0032617-.134308-.0032617h-10.232465c.08241-.7764891.12411-1.5848107.113127-2.4227353 0-.6156753-.499121-1.1147555-1.114755-1.1147555-.615675 0-1.114756.5073789-1.114756 1.1230543 0 .0038397.000248.0197765.000289.0197765h-.00099c.000701.1238618.30247 6.6517049-3.945657 12.1012492l1.632952 1.2202031s2.904764-3.3435646 4.069518-8.6972812h2.301557c-.379677 2.9279673-1.942895 10.4620218-8.207614 15.427019l1.346831 1.7141224s7.635208-4.1805396 9.179681-17.1411414h1.368301 1.330481c-.020726 2.2516823-.643627 14.3561105-11.388755 21.7936354l1.224332 1.7140812s11.708979-6.2043989 12.469531-23.5077166h1.055426.012014.045003c.619309.0085877 1.096713.5103516 1.10365 1.1147555l.011106 3.1641716z"></path>
                                <path d="m96.579536 17.8383632v5.9453627h-9.8676507l-.0111888-4.8369242c0-.6132806.4842168-1.1084385 1.1035254-1.1084385m20.0880181 5.9453627h-9.083193v-5.9453627h8.936912c.123862 0 .527321.0312544.504572.3392985 0 0 .006441.4726976-.857082 1.6539669l1.758506 1.4602472s1.269459-1.6829506 1.555084-2.9231367c0 0 .296442-1.1557951-.104663-1.8314195-.577278-.9150078-1.992894-.9284675-1.992894-.9284675h-.863523-8.936912v-1.1841593c0-.6156754-.4990801-1.1147555-1.1147555-1.1147555-.6156753 0-1.1147555.4990801-1.1147555 1.1147555v1.1841593h-8.7340269-.039099c-1.8469847 0-3.3240358 1.5268848-3.3240358 3.3738695v.0864968 3.9300499h-.0132945l.0117669 5.5170489c0 8.7397246-3.3502532 12.5828649-3.3502532 12.5828649l1.7570611 1.5123929c4.0790556-4.6442366 3.7991694-12.4718847 3.7991694-12.4718847l.0078858-4.1264533h18.9882912 1.029952c1.385723 0 .895355 1.1173153.895355 1.1173153-1.717178 3.6300981-5.03019 6.1819799-8.3236319 8.3017082-3.4490949-2.1452438-6.3797046-4.2994056-8.6348137-8.304268h-2.2885518s1.5799389 4.8265198 8.8746513 9.5423485c-5.4922766 2.7757825-10.794219 3.978356-10.794219 3.978356l.8165791 2.0847579c5.7836819-1.4965386 9.275798-3.0187579 12.0382035-4.7150442 3.3196185 1.9282793 7.4641135 3.6102802 13.0041185 4.7159525l.612744-2.0833954s-5.655939-.8689726-11.523599-3.9731126c8.754546-5.559038 8.704878-10.6646182 8.704878-10.6646182h-.009496c-.001404-1.19733-.981976-2.2295111-2.199413-2.2295111"></path>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="col-8" style="padding-top: 10px;">
                    <div class="input-group">
                        <input class="form-control {2:form-control-{1:sm|lg}}" type="text" placeholder="搜尋商品，品牌以及賣場">
                        <button type="button" class="btn btn-secondary" style="padding-top: 10px; color: rgb(255,255,255)">
                            <i class="fas fa-search" style="z-index: 1;"></i>
                        </button>
                    </div>

                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">休閒套裝</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">nike air</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">蕾絲洋裝</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">夾式耳環</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">adidas 外套</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">交換禮物</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">三星手機殼</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">oppo 手機殼</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2" style="padding-top: 10px;" align="center">
                    <i class="fas fa-shopping-cart" style="height: 50px; width: 50px; padding-top: 15px;"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- body -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="body">
        <div class="container">
            <div class="row mb-3">
                <div class="col-8">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="https://cfshopeetw-a.akamaihd.net/file/7d3583ee1620620874c0eaced56a4220" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://cfshopeetw-a.akamaihd.net/file/4e4bc2ebb24f76ab18c74230c1d71539" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://cfshopeetw-a.akamaihd.net/file/fb4bf6b107798023904e62573beb15e1" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row mb-2">
                        <div class="col">
                            <img src='https://cfshopeetw-a.akamaihd.net/file/51854a313da97a6f44931043aa67b95b' width="100%" alt='' />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img src='https://cfshopeetw-a.akamaihd.net/file/82859a34f2a6d5b22dfe56813d8be40d' width="100%" alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <div class="row mb-3">
                        <div class="col">
                            熱門關鍵字已更新 12PM
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                        <div class="col">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/50a2d003c391607d0cf7d575b979df76_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <div class="row mb-3">
                        <div class="col">
                            分類
                        </div>
                    </div>
                    <div class="row mb-1">
                        <div class="col">
                            <div class="btn-group" role="group" aria-label="Basic">
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/6bedf0fb061cb45d9651eab71914a4fc_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>女生衣著</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/e4abf0552e53c270f61fccda8a021671_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>美妝保健</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/77918c70513dccf13036a28f23bee3dc_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>嬰幼童與母親</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/85ce6ecfbbbefa29b554c00825e62f37_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>居家生活</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/5b8e22a1dab9ddd6834a2a18fcb101b1_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>女生配件</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/f319fe13eba574029778e386c54bd299_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>女鞋</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/b5474f27e6e48ddbc84d6af0a2bf6e64_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>女生包包/精品</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/b4f9106098536a753d315718cf2d9392_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>美食、伴手禮</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/2ce91668925cec2d33d5638012a2a7a0_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>寵物</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/1ae63ea21d4f3cc5509ccd45a250deab_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>服務、票卷</small>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="btn-group" role="group" aria-label="Basic">
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/337a2ff6850af41aa267ed0a4958c4b5_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>男生衣著</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/307c50e37e630a44dff682c380ec4ccb_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>手機平板與周邊</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/00c1358bb7d332a2b2cef38d50759352_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>3C相關</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/d3d34b65af14439b54ac180ad11a9c64_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>家電影音</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/d3bf3ea11387bdad44853e046718f2e8_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>男生包包與配件</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/6a35a68345b3afa69a676002a4fe2eb7_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>男鞋</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/f51c572ae67d8521857854893de07caa_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>戶外與運動用品</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/3234be31f1f4f94f5cc4ac450195f849_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>汽機車零件百貨</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/bd033608edcd1872eafd81cf75d25c35_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>娛樂、收藏</small>
                                </button>
                                <button style="height:120px" type="button" class="btn btn-light ">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/d0b28b169a8543bef91f2924cdeb4c58_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br>
                                    <small>遊戲王</small>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <div class="row mb-3">
                        <div class="col" style="color:#FF5723">
                            <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/6e4985598fefcac75c77d73efd1e4b92.png" height="30px"
                                class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                            <span class="badge badge-dark">00</span>
                            <span class="badge badge-dark">00</span>
                            <span class="badge badge-dark">00</span>
                        </div>
                        <div class="col-1 text-right">
                            <a href="#">查看全部</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button style="height:200px" type="button" class="btn btn-light">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/dc369c0709bad7d42475a1586f32f657_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br> $59
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>
                                </button>
                                <button style="height:200px" type="button" class="btn btn-light">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/dc369c0709bad7d42475a1586f32f657_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br> $59
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 99%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">99%</div>
                                    </div>
                                </button>
                                <button style="height:200px" type="button" class="btn btn-light">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/dc369c0709bad7d42475a1586f32f657_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br> $59
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                </button>
                                <button style="height:200px" type="button" class="btn btn-light">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/dc369c0709bad7d42475a1586f32f657_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br> $59
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                                    </div>
                                </button>
                                <button style="height:200px" type="button" class="btn btn-light">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/dc369c0709bad7d42475a1586f32f657_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br> $59
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </button>
                                <button style="height:200px" type="button" class="btn btn-light">
                                    <img src="https://cfshopeetw-a.akamaihd.net/file/dc369c0709bad7d42475a1586f32f657_tn" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                        alt="">
                                    <br> $59
                                    <br>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <img src="https://cfshopeetw-a.akamaihd.net/file/bfcd6937339d1919abb4c500b5228c21" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                        alt="">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    蝦皮商城&nbsp;
                    <img height="20px" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/03d764143ee9949ba23eee51c1f9b009.png">15天鑑賞期
                    <img height="20px" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/4183e407d45c9d68e8f73f22ab6f39de.png">退貨無負擔
                    <img height="20px" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/413b87104bd41d20a89386dbd96fbd17.png">假一賠二
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button style="height:100px" type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/02a5a687dc4b40e47255912144999447" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/e89577bd8ad96381b935b16237597a65" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/84eed6b7792e7720d37e3fc3a2818d3f" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/912f0958378f634afc53394c566df8c2" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/f2aebebcd619cd01993b77fee37e839f" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/6cb630d0e93edb85330bcd164d4461df" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button style="height:100px" type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/d94d64e38f6f5980272a25facef53624" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/7048ca827a20c97c7959096ec4c2c9fa" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/308cb863fa7d1095cdb2203fd83ad3b1" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/cc026cc4e90d2c20a3954f0aec1a3453" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/2374356a888d42128a730deb917ca8a5" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                        <button type="button" class="btn btn-light">
                            <img src="https://cfshopeetw-a.akamaihd.net/file/afa1639acaece74f56d582d87a7669ea" width="100%" class="img-fluid|thumbnail rounded-top|rounded-right|rounded-bottom|rounded-left|rounded-circle|"
                                alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
            <div class="row">
                <div class="col-2.5">
                    <h3>每日新發現</h3>
                </div>
                <div class="col-8 mt-2">
                    <p>已更新6PM</p>
                </div>
                <div class="col-1.5 mt-1 text-right">
                    <a href="#">
                        <font size="5" color="darkorange">查看全部&gt;</font>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-2 mt-1">
                    <button style="background:white">
                        <img class="card-img-top" src="https://cfshopeetw-a.akamaihd.net/file/d3eb9303a89d5d26fdda245685457552_tn" alt="">
                        <h5><span class="badge badge-danger">商城</span>Coach 單層手拿包 人氣精選</h5>
                        <div>
                            <p>
                                <font color="gray"> <span style="text-decoration:line-through;">$2,980</span></font>  
                                <font color="red">1,280 &nbsp;&nbsp;&nbsp;&nbsp;</font>  
                                <svg class="shopee-svg-icon icon-free-shipping" height="12" viewBox="0 0 20 12" width="20"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>
                                <br>
                                <font color="lightgray">♡ 555</font>  
                                <font color="yellow">★★★★★</font>  
                                <font color="lightgray">(173)</font>       
                            </p>
                            </div>
                    </button>
        
                </div>
    
                <div class="col-2 mt-1">
                    <button style="background:white">
                        <img class="card-img-top" src="https://cfshopeetw-a.akamaihd.net/file/d3eb9303a89d5d26fdda245685457552_tn" alt="">
                        <h5><span class="badge badge-danger">商城</span>Coach 單層手拿包 人氣精選</h5>
                        <div>
                            <p>
                                <font color="gray"> <span style="text-decoration:line-through;">$2,980</span></font>  
                                <font color="red">1,280 &nbsp;&nbsp;&nbsp;&nbsp;</font>  
                                <svg class="shopee-svg-icon icon-free-shipping" height="12" viewBox="0 0 20 12" width="20"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>
                                <br>
                                <font color="lightgray">♡ 555</font>  
                                <font color="yellow">★★★★★</font>  
                                <font color="lightgray">(173)</font>       
                            </p>
                            </div>
                    </button>
        
                </div>
                <div class="col-2 mt-1">
                    <button style="background:white">
                        <img class="card-img-top" src="https://cfshopeetw-a.akamaihd.net/file/d3eb9303a89d5d26fdda245685457552_tn" alt="">
                        <h5><span class="badge badge-danger">商城</span>Coach 單層手拿包 人氣精選</h5>
                        <div>
                            <p>
                                <font color="gray"> <span style="text-decoration:line-through;">$2,980</span></font>  
                                <font color="red">1,280 &nbsp;&nbsp;&nbsp;&nbsp;</font>  
                                <svg class="shopee-svg-icon icon-free-shipping" height="12" viewBox="0 0 20 12" width="20"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>
                                <br>
                                <font color="lightgray">♡ 555</font>  
                                <font color="yellow">★★★★★</font>  
                                <font color="lightgray">(173)</font>       
                            </p>
                            </div>
                    </button>
        
                </div>
    
                <div class="col-2 mt-1">
                    <button style="background:white">
                        <img class="card-img-top" src="https://cfshopeetw-a.akamaihd.net/file/d3eb9303a89d5d26fdda245685457552_tn" alt="">
                        <h5><span class="badge badge-danger">商城</span>Coach 單層手拿包 人氣精選</h5>
                        <div>
                            <p>
                                <font color="gray"> <span style="text-decoration:line-through;">$2,980</span></font>  
                                <font color="red">1,280 &nbsp;&nbsp;&nbsp;&nbsp;</font>  
                                <svg class="shopee-svg-icon icon-free-shipping" height="12" viewBox="0 0 20 12" width="20"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>
                                <br>
                                <font color="lightgray">♡ 555</font>  
                                <font color="yellow">★★★★★</font>  
                                <font color="lightgray">(173)</font>       
                            </p>
                            </div>
                    </button>
        
                </div>
    
                <div class="col-2 mt-1">
                    <button style="background:white">
                        <img class="card-img-top" src="https://cfshopeetw-a.akamaihd.net/file/d3eb9303a89d5d26fdda245685457552_tn" alt="">
                        <h5><span class="badge badge-danger">商城</span>Coach 單層手拿包 人氣精選</h5>
                        <div>
                            <p>
                                <font color="gray"> <span style="text-decoration:line-through;">$2,980</span></font>  
                                <font color="red">1,280 &nbsp;&nbsp;&nbsp;&nbsp;</font>  
                                <svg class="shopee-svg-icon icon-free-shipping" height="12" viewBox="0 0 20 12" width="20"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>
                                <br>
                                <font color="lightgray">♡ 555</font>  
                                <font color="yellow">★★★★★</font>  
                                <font color="lightgray">(173)</font>       
                            </p>
                            </div>
                    </button>
        
                </div>
    
                <div class="col-2 mt-1">
                    <button style="background:white">
                        <img class="card-img-top" src="https://cfshopeetw-a.akamaihd.net/file/d3eb9303a89d5d26fdda245685457552_tn" alt="">
                        <h5><span class="badge badge-danger">商城</span>Coach 單層手拿包 人氣精選</h5>
                        <div>
                            <p>
                                <font color="gray"> <span style="text-decoration:line-through;">$2,980</span></font>  
                                <font color="red">1,280 &nbsp;&nbsp;&nbsp;&nbsp;</font>  
                                <svg class="shopee-svg-icon icon-free-shipping" height="12" viewBox="0 0 20 12" width="20"><g fill="none" fill-rule="evenodd" transform=""><rect fill="#00bfa5" fill-rule="evenodd" height="9" rx="1" width="12" x="4"></rect><rect height="8" rx="1" stroke="#00bfa5" width="11" x="4.5" y=".5"></rect><rect fill="#00bfa5" fill-rule="evenodd" height="7" rx="1" width="7" x="13" y="2"></rect><rect height="6" rx="1" stroke="#00bfa5" width="6" x="13.5" y="2.5"></rect><circle cx="8" cy="10" fill="#00bfa5" r="2"></circle><circle cx="15" cy="10" fill="#00bfa5" r="2"></circle><path d="m6.7082481 6.7999878h-.7082481v-4.2275391h2.8488017v.5976563h-2.1405536v1.2978515h1.9603297v.5800782h-1.9603297zm2.6762505 0v-3.1904297h.6544972v.4892578h.0505892c.0980164-.3134765.4774351-.5419922.9264138-.5419922.0980165 0 .2276512.0087891.3003731.0263672v.6210938c-.053751-.0175782-.2624312-.038086-.3762568-.038086-.5122152 0-.8758247.3017578-.8758247.75v1.8837891zm3.608988-2.7158203c-.5027297 0-.8536919.328125-.8916338.8261719h1.7390022c-.0158092-.5009766-.3446386-.8261719-.8473684-.8261719zm.8442065 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187zm2.6224996-1.8544922c-.5027297 0-.853692.328125-.8916339.8261719h1.7390022c-.0158091-.5009766-.3446386-.8261719-.8473683-.8261719zm.8442064 1.8544922h.6544972c-.1549293.571289-.7050863.9228515-1.49238.9228515-.9864885 0-1.5903965-.6269531-1.5903965-1.6464843 0-1.0195313.6165553-1.6669922 1.5872347-1.6669922.9580321 0 1.5366455.6064453 1.5366455 1.6083984v.2197266h-2.4314412v.0351562c.0221328.5595703.373095.9140625.9169284.9140625.4110369 0 .6924391-.1376953.8189119-.3867187z" fill="#fff"></path><path d="m .5 8.5h3.5v1h-3.5z" fill="#00bfa5"></path><path d="m0 10.15674h3.5v1h-3.5z" fill="#00bfa5"></path><circle cx="8" cy="10" fill="#047565" r="1"></circle><circle cx="15" cy="10" fill="#047565" r="1"></circle></g></svg>
                                <br>
                                <font color="lightgray">♡ 555</font>  
                                <font color="yellow">★★★★★</font>  
                                <font color="lightgray">(173)</font>       
                            </p>
                            </div>
                    </button>
        
                </div>
            </div>
            
            
        </div>

    <!-- Footer -->
    <div class="row" style="background-color:#FF5722">&nbsp;</div>
    <div class="container">
        <div class="row">&nbsp;</div>
        <div class="row">
            <div class="col-4">
                <div class="row">
                    <div class="col-3">
                        <svg class="shopee-svg-icon footer__block__icon" viewBox="0 0 47.72 48">
                            <path d="m47.54 4.96c-15.05.44-23.68-4.92-23.68-4.92s-8.63 5.36-23.68 4.92c0 0-1.46 17.33 4 28.48a25.9 25.9 0 005.81 6.93 72.37 72.37 0 0013.87 7.67 72.37 72.37 0 0013.84-7.64 25.9 25.9 0 005.81-6.93c5.5-11.19 4.03-28.51 4.03-28.51zm-8.06 18.34-14.44-7.6c-2.4-.85-3.16 1-3.16 1-1.06 2.62 2.19 3.86 2.19 3.86l14.2 7.36c-.23.65-.47 1.28-.75 1.88a16.54 16.54 0 01-3.66 4.67 35.07 35.07 0 01-10 5.85 36 36 0 01-10-5.78 16 16 0 01-3.68-4.65 24.66 24.66 0 01-1.46-4.26l12.84 6.71c2.4.87 3.25-.84 3.25-.84 1.18-2.37-2.07-3.62-2.07-3.62l-15-7.72a61.75 61.75 0 01-.38-8.81c10.5.28 16.5-3.61 16.5-3.61s6 3.89 16.48 3.61a60 60 0 01-.86 11.95z"></path>
                        </svg>
                    </div>
                    <div class="col-9">
                        <p>
                            <strong>蝦皮承諾</strong>
                        </p>
                        <p>蝦皮購物保障你的交易安全：我們只會在買家確認收到商品後，才會撥款給賣家！</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-3">
                        <svg class="shopee-svg-icon footer__block__icon" viewBox="0 0 44.94 48">
                            <path d="m13.9 37.68a1.18 1.18 0 01-.64-.95 1 1 0 01 .94-1 1.54 1.54 0 01 .84.33l14.75 8.82 4.81-2.7-14.45-8.5a1.17 1.17 0 01-.76-1 1 1 0 011.69-.77l15.39 9.21 4.82-2.71-15-8.83c-.39-.24-.76-.51-.76-1a1 1 0 011.69-.77l15.85 9.48a6.54 6.54 0 001.88-5.08v-.87l-19.19-11.48a5.63 5.63 0 00-5.23.32l-7.7 4.48a5.26 5.26 0 01-5.54 0l-2.46-1.6s-.47-.35 0-.64l15.39-9.27a5.87 5.87 0 015.85 0l7.4 3.66a7.55 7.55 0 006.47-.52l4.89-2.94a5.24 5.24 0 00-2.6-3.48l-16.12-8.78a6.43 6.43 0 00-5.95-.64l-17.83 9.91s-2.33.82-2.33 4.76v17.61s-.12 3.87 2.7 5.4l15.77 8.68a7.1 7.1 0 007.26.32l2.13-1.2z"
                                fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="col-9">
                        <p>
                            <strong>值得信賴的強大賣家團隊</strong>
                        </p>
                        <p>公開透明的評價系統，即時聊天功能，讓你隨時發問，談出好價格！</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-3">
                        <svg class="shopee-svg-icon footer__block__icon" enable-background="new 0 0 48 48" viewBox="0 0 48 48" x="0" y="0">
                            <path d="m42.4 14.3c.1-4.3-1.5-6.3-1.5-6.3s-3.6-4.5-5.4-6.2c-1.5-1.5-3.3-1.7-3.9-1.8-.2 0-.3 0-.3 0h-6.9-6.9s-.1 0-.3 0c-.7.1-2.5.3-3.9 1.8-1.7 1.8-5.3 6.2-5.3 6.2s-1.5 2-1.5 6.2v6.6l35.9-6.3s0-.1 0-.2zm-17.9-2.3c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8c-.1 2.1-1.7 3.8-3.8 3.8zm14.3 35.9c-4.3.1-14.3.1-14.3.1v-1.7 1.7s-10 0-14.4-.1c-3.9-.3-3.6-2.7-3.6-2.7s0-2.7 0-6.6l35.9-6.3v12.9s.3 2.4-3.6 2.7zm-34.3-24.1 9-1.6v3.6l-4.6.8v1.5l4.6-.8v3.5l-4.6.8v4.4l-4.4.8zm17.8 4.5 1.8 4.8-3.9.8-1.4-4.4-.4.1v.2 4.5l-3.7.7v-13l4.7-.8c.6-.1 1.2-.1 1.7-.1.5.1 1 .2 1.4.5.4.2.7.6 1 1s .4.9.5 1.4c.2 1 .1 1.9-.2 2.7-.3.7-.8 1.2-1.5 1.6zm-1.7-3.5c-.1-.4-.2-.6-.5-.7s-.6-.1-1.1 0l-.8.1v2.2l.8-.1c.5-.1 1-.3 1.2-.5.4-.3.5-.6.4-1zm13.6-2.8v-3.6l-9.2 1.6v13l9.2-1.6v-3.6l-4.9 1v-1.4l4.9-.8v-3.3l-4.9.8v-1.3zm10.2-1.8v-3.6l-9.2 1.6v13l9.2-1.6v-3.6l-4.9 1v-1.4l4.9-.8v-3.3l-4.9.8v-1.3z"></path>
                        </svg>
                    </div>
                    <div class="col-9">
                        <p>
                            <strong>免上架費</strong>
                        </p>
                        <p>快速成交好方便，輕鬆上手做頭家!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="border container-fluid"></div>
    <div class="container">
        <div class="row">&nbsp;</div>
        <strong>蝦皮購物－花得更少，買得更好</strong>
        <div class="row">&nbsp;</div>
        <p>蝦皮購物是台灣首屈一指的電商平台，在東南亞六國皆有佈局（新加坡、馬來西亞、泰國、印尼、越南、菲律賓），簡易方便的操作介面讓你隨時隨地都能輕鬆購物！蝦皮購物擁有完整的金流、物流服務，提供安全的線上購物環境，更有蝦皮承諾保障你的交易安全，啟動第三方支付託管交易款項，無須擔心收不到訂購的商品、或是拿不到退還的金額。商品評價和評論透明呈現在你眼前，你可以快速挑選出商品受歡迎、並提供良好服務、得到買家一致推薦的賣家；還能夠透過購買清單中的訂單詳情獲得最即時的貨態追蹤，查詢訂單最新配送進度。現在就來加入蝦皮購物，享受最獨一無二的網路購物體驗！</p>
        <div class="row">&nbsp;</div>
        <strong>愛上蝦皮購物</strong>
        <p>在蝦皮購物，你能夠用最划算的價格買到所有需要、想要的商品！從每日「限時特賣」專區，你可以找到各式好康下殺品；「每日新發現」貼心的相關商品推薦為你整理出更多好選擇。蝦皮商城網羅國內外各大知名大牌進駐，所有商品均享有100%正品的保證，種類繁多、品牌齊全，包括3M、鍋寶、NIVEA、acer、樹德收納、MOTHER-K等，別忘了還有蝦幣回饋，只要在優選賣家賣場和蝦皮商城消費即可獲得蝦幣累積和進行折抵，買越多賺越多，線上購物從未這麼簡單！</p>
        <p>不知道要買什麼？快來「熱門搜尋」一覽時下最夯熱門話題商品，瞧瞧大家都在瘋什麼！或是直接瀏覽美妝保健、女生衣著、女生配件、女鞋、女生包包、嬰幼童與母親、男生衣著、男生包包與配件、男鞋、寵物、美食伴手禮、娛樂收藏、遊戲王、居家生活、手機平板與周邊、3C、家電影音、戶外運動用品、汽機車零件百貨、服務票券、代買代購和其他類別，強大的搜尋功幫助你找尋心中好物，趕快加入蝦皮購物挖掘最新熱門好貨！</p>
        <div class="row">&nbsp;</div>
        <strong>蝦皮購物台灣 5 大購物節，千萬不能錯過！</strong>
        <p>除了天天都有的購物金與限時特賣，蝦皮還有 5 大年度購物節你一定要知道！每年一、二月的傳統新年購物節，蝦皮發紅包讓你便宜買年貨，除舊佈新為你添好運；六月蝦皮年中慶，用最划算折扣購入夏季服飾，換新衣就等這一檔；九月 99 蝦拼購物節，是全台灣最大的網購盛典，眾多意想不到的優惠好禮全台瘋搶；十一月的
            1111 購物節，不論你是單身還死會，都該用蝦皮超優惠的折價券，入手高品質的商品犒賞自己；最後， 1212 生日慶，蝦皮揪你一起狂歡慶祝，購入聖誕驚喜與新年好禮，就等這一波。台灣最狂的折扣優惠都在這裡，寵愛自己就從蝦皮購物開始！</p>
        <div class="row">&nbsp;</div>
        <div class="border container-fluid"></div>
    </div>
    <div class="row" style="background:#F5F5F5">
        <div class="container">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-2">
                    <div class="row">客服中心</div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <a href="#">幫助中心</a>
                    </div>
                    <div class="row">
                        <a href="#">蝦皮商城</a>
                    </div>
                    <div class="row">
                        <a href="#">付款方式</a>
                    </div>
                    <div class="row">
                        <a href="#">蝦皮錢包</a>
                    </div>
                    <div class="row">
                        <a href="#">蝦幣</a>
                    </div>
                    <div class="row">
                        <a href="#">運費補助</a>
                    </div>
                    <div class="row">
                        <a href="#">退貨退款</a>
                    </div>
                    <div class="row">
                        <a href="#">蝦皮承諾</a>
                    </div>
                    <div class="row">
                        <a href="#">聯絡客服</a>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row">關於蝦皮</div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <a href="#">關於蝦皮</a>
                    </div>
                    <div class="row">
                        <a href="#">加入我們</a>
                    </div>
                    <div class="row">
                        <a href="#">蝦皮條款</a>
                    </div>
                    <div class="row">
                        <a href="#">隱私權政策</a>
                    </div>
                    <div class="row">
                        <a href="#">蝦拼開箱</a>
                    </div>
                    <div class="row">
                        <a href="#">蝦皮商城</a>
                    </div>
                    <div class="row">
                        <a href="#">賣家中心</a>
                    </div>
                    <div class="row">
                        <a href="#">限時特賣</a>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row">物流合作</div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <div class="col-6">
                            <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/930d945132387f2bb1749d33d6e74e29.png">
                        </div>
                        <div class="col-6">
                            <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/306731c5956b52950fdeda0101b5338e.png">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/b2607d6e6633ba4b0120f4289d7d40c5.png">
                        </div>
                        <div class="col-6">
                            <img src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/de49ce2f2dba6fc113e0a2cebe05387e.png">
                        </div>
                    </div>
                </div>
                <div class="col-1">&nbsp;</div>
                <div class="col-2">
                    <div class="row">關注我們</div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <a href="https://www.facebook.com/ShopeeTW">
                            <img class="footer__category-list-item-list-icon" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/ab584e2df6c595722839286d78d1c933.png">
                            <!-- react-text: 215 -->
                            <!-- /react-text -->
                            <!-- react-text: 216 -->Facebook
                            <!-- /react-text -->
                        </a>
                    </div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <a href="https://www.instagram.com/Shopee_TW/">
                            <img class="footer__category-list-item-list-icon" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/47c0c67dd555fa5535232473a46a9b3b.png">
                            <!-- react-text: 220 -->
                            <!-- /react-text -->
                            <!-- react-text: 221 -->Instagram
                            <!-- /react-text -->
                        </a>
                    </div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <a href="https://line.me/R/ti/p/@shopee">
                            <img class="footer__category-list-item-list-icon" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/eeb044d86eb06fc6503bbfcdb3fc7a49.png">
                            <!-- react-text: 225 -->
                            <!-- /react-text -->
                            <!-- react-text: 226 -->Line
                            <!-- /react-text -->
                        </a>
                    </div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <a href="https://www.linkedin.com/company/shopee/">
                            <img class="footer__category-list-item-list-icon" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/4c468093e9cb09af7290e35e382078e4.png">
                            <!-- react-text: 230 -->
                            <!-- /react-text -->
                            <!-- react-text: 231 -->LinkedIn
                            <!-- /react-text -->
                        </a>
                    </div>
                    <div class="row">&nbsp;</div>
                </div>
                <div class="col-2">
                    <div class="row">下載蝦皮</div>
                    <div class="row">&nbsp;</div>
                    <div class="row">
                        <div class="col-6">
                            <img width="70" height="70" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/c82fb6cbb4065eb91f1788f8cacc91a2.png">
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <img width="160" height="34" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/df3ffda2f31c9ca2b52423dfd5deb146.png">
                            </div>
                            <div class="row">
                                <img width="160" height="34" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-tw/assets/2679f513b5f9e235adf2c6c288617e7b.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">&nbsp;</div>
            <div class="border container-fluid"></div>
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-6">© 2018 Shopee. 版權所有。</div>
                <div class="col-6">國家和地區 :
                    <a href="#">新加坡 印尼 台灣 泰國 馬來西亞 越南 菲律賓</a>
                </div>
            </div>
            <div class="row">&nbsp;</div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src=" https://code.jquery.com/jquery-3.2.1.slim.min.js " integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN "
        crossorigin="anonymous "></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js " integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q "
        crossorigin="anonymous "></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js " integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl "
        crossorigin="anonymous "></script>
</body>

</html>
```
