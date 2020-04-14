import React from 'react'
import SlideShow from 'react-image-show';
import { Dropdown } from 'react-bootstrap';
import '../App.css';
var data = [
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/22520045_838661112971895_4793743680314964975_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_oc=AQmt9STLy_6wHVF9y8Sz49OUdC17o1rF75K7U1zvM_a_I_67yZt8ROeeTwmFooX-pz5C1GC46L4oWPEhaDxtF-NX&_nc_ht=scontent-dfw5-2.xx&oh=d9bf5fd182205683a803164588053252&oe=5EBBD681",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/81423529_1390827734421894_1832193062328074240_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_oc=AQlre8c-nLGI7R_SDmqZUowtRh52_esiV6D1eeh03zxcDb6XaSDc69TXxMvc7UZUDCxThiMntvveoyPrjAPgosFn&_nc_ht=scontent-dfw5-1.xx&oh=a32950d7add8d848442ed8e2222b2348&oe=5EB9F3CE",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/32897525_945060565665282_5561018037320024064_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_oc=AQmEKOd0s2jS4O3zN3WHx_j-M6KSFaeV-DARlNcc6q6F12fBpe-JaQlpZPvUxSyuG-spf6nbrZqHe6fSs62d1Jzg&_nc_ht=scontent-dfw5-1.xx&oh=4515ba2828e750a57aecaa4b4f43b881&oe=5EBAD849",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/92360180_1481107265393940_6671273147829846016_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQkEqDjnS_-qSuq1kCfroe_zD2DOublrYECWya8zstEIZs7cs_Kofv_Ssc6G3whmtIykG3ZvHkz2Ge3oyGBGB619&_nc_ht=scontent-dfw5-2.xx&oh=7588826bb4bcd31af8d3f7a9561bb791&oe=5EB86501",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/91625613_1481107002060633_6232869218698657792_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_oc=AQnfnSf63VA3pwyQ-sAkLGhnwrv1W88HwMnq53a2X46TKdyto_o3oJnzA8RMRJjAZMXdwfbGQyTjyUw6L0pJp3QG&_nc_ht=scontent-dfw5-2.xx&oh=3152510dee6a7446265f6688b6c33539&oe=5EB9ADA4",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/91780695_1481106905393976_4551436788429750272_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQnFF0rTqtH6kfOwNk3tjqni58BAUymHu9JqWAcXTdNyP-Z4plXLz4a9VHBHTpHGcO_PfSPTHqVb_jCPUrNnsQx0&_nc_ht=scontent-dfw5-2.xx&oh=1832f6f19099bbf7a415fa2d9938895c&oe=5EBA9FA1",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/69774111_1288853467952655_4910012123230240768_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_oc=AQnWUQARVHnrrmEKD5qvE7gIXyr5oGq5-dNTQKAk-H7zR_daCxOfCnVfVaStNphD0QhQn9YCIWqijr9foapGmdz0&_nc_ht=scontent-dfw5-2.xx&oh=c56cbc19b9adf5c393dbba5ec7617d96&oe=5EBA3935",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/60243582_1196621793842490_6979148846127382528_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_oc=AQmlTkiLI-PoTNSVuluBlU7Vdon-NxB2KzdPC-1UOcwPeUWuwfpgucS2vns4MctFPX5aFiGk2gVRqwPBWnC0zTCg&_nc_ht=scontent-dfw5-2.xx&oh=d0df04d87806f23654b5de6dc07eb0c0&oe=5EB990EF",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/58775366_1186400441531292_4722336303096528896_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQnwNZje2yqIezEjXeSwQrPhmdG9gUSdf-4Z7ZExdf3YcWbuoA07oOqW01CEe3lIF5o3ljbQ4yzjDl_yl7bPX6n0&_nc_ht=scontent-dfw5-2.xx&oh=9d9dbc8445076d13942c8f7b7f36e169&oe=5EB89980",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/56262400_1172277509610252_7178596389935382528_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQkG6NjfttoPdDeDuMQ0_is39OkQ9FIwZCTIizuMtYiehRG49Eo_KCESQV41uGivb72zyxINh2jyX3BT8Q-evQX5&_nc_ht=scontent-dfw5-1.xx&oh=9c713efcaf08b516cd4ae2075e34d101&oe=5EBB5082",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/79312593_1375275739310427_4526678118739476480_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQk1spODZNhJnYNOJsKXzDR9R0S4-gbN1qha5IeUeIiNWM5NhD2Lb87By5o_zSAQ9YITdLXfPq2RhJ4dGskv8M-_&_nc_ht=scontent-dfw5-2.xx&oh=f2ad1d334a9c0d2617ba5689f2d20fd3&oe=5EBCCC91",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/79355410_1375275442643790_9062687513491013632_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_oc=AQk_oJsmEqVoxl5ovs5Yirm5fkf9txnl1rCWJ6kJScTen8pD5-AXvpI-SezI8EdvEhxYasTQgIjQ_O8KK2-69uPn&_nc_ht=scontent-dfw5-2.xx&oh=e13b802210a0771d60c07b41a82cacca&oe=5EBCC685",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/78565796_1374419619396039_6550953865280225280_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_oc=AQkkffQ1r9SSDwDzvUurjVYbmK3_CiVNagNJ7jvof6Ro_UXG-koIZZfGA1NWGoYdMaDU0YbQKDp3k7BN9IvbY06T&_nc_ht=scontent-dfw5-1.xx&oh=a36470f78e313cddb2164c9bcae68e43&oe=5EBBA110",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/77233072_1366676646837003_5301595621730287616_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_oc=AQm5JEsibLib1n8arp-ieE-SPZzF6qdLiCBCkMM3020GpNNqU2Cyf38ATn_3Jr4EZCvZXMsfswZ9b0MPNpikqzQ5&_nc_ht=scontent-dfw5-1.xx&oh=8b70b8cfdf97ade78e5430dd57234c12&oe=5EBB6F0D",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/78844529_1366676623503672_7684285027617603584_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQk_BHOFvK7TfrHsX1NSzdbSi-jS4umi8Ob-gyqZah8MYEZmnKGCxEh-TBexiTXQW_3I--umXOAmitlcJOdJSs1y&_nc_ht=scontent-dfw5-2.xx&oh=f0c5d78276ff3b465e189e42ed9ebbbc&oe=5EBB9A38",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/70852733_1358664404304894_8044087292840640512_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_oc=AQljK5QfdOcdx-K_x-tm87eRRpA193bZ5zNKYUIV75BGvqKXkUK3cJPh2LBqrQSz4RNKQS9ddhTQe73CjOGSkJTY&_nc_ht=scontent-dfw5-2.xx&oh=22e7b278f5a74be3c2ef678c866c2f2e&oe=5EBB41D6",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/s960x960/75456688_1353813824789952_4923327483920515072_o.jpg?_nc_cat=100&_nc_sid=110474&_nc_oc=AQkQ1PwAP9tUOp02hsV2e0iGDZcrdAXysrbAclUgto5UGCwoPiPLQACSAtBznlxP1wFJvYp1H7W3BL9OMDJfta4w&_nc_ht=scontent-dfw5-2.xx&_nc_tp=7&oh=f3c13af824a3b25a18f684159f0799e7&oe=5EBAC143",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/73515716_1333263030178365_468643668580892672_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_oc=AQlH1t2CbgAV3qP-yqnZDn7viAQjzmmAuE8EwMVqqKa_Q7MelYvHHy14FEmkrsab2vaAiYvm9nwrqaj3j-LuPd1H&_nc_ht=scontent-dfw5-1.xx&oh=60ebc24fef928380c1081176a6281cf0&oe=5EB998E8",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/73232854_1333262993511702_6537973022412767232_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_oc=AQlpKWLVRYoJIupU77INkXxoTlg98FfeEs-n5IzVKXRqfY89cfopQWR_JAfdlhvIpCwFyX8GdAu6x-PLe1AcrDMn&_nc_ht=scontent-dfw5-1.xx&oh=90d4a39a92843de77823d4d77ad08e3d&oe=5EBA9ACA",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/72942489_1326035550901113_8821190513278320640_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQmtkcnN2kmjUWEdjQLb5dhrlJaRxHTEwHyk_Isy082wSluDu6wWJ82j7i23rTm62hnRLibmERTY73NCul4epu_f&_nc_ht=scontent-dfw5-1.xx&oh=1ab5e4c1a1b6890e98f6bf86f800a3b6&oe=5EBC4D58",
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/74634725_1326027384235263_4779459565701824512_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQkN-ewn3yHtnrDLGVsdyz7PtwJt2BIn34zWMFdCXayH0OmrpQFEG3XVXUR4bZBtiHiX1XQwtAe6Nb1K2kRcjomi&_nc_ht=scontent-dfw5-1.xx&oh=d87467f47438eaa2ec05ea660dbf4de8&oe=5EBA497E",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/63365331_1220729651431704_5083234390570434560_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_oc=AQkqR_vhrX6gAze4Og2v4RcBb5-7ezITyHOwcNC_AW-LKZP0aKKhUWRPhiLfT2tvr4w4dmxFfHBFchFEY4ZqM4YR&_nc_ht=scontent-dfw5-2.xx&oh=0a7dafdf3ec0efe653fbb8a5cf89b2f4&oe=5EBB319A",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/51810424_1135106259994044_8347479144065400832_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQmnOOGEB_Y_5Ng2FTbVDDfakHTpwsi7DffhTr0gBldY71nhu0dIrh9hYTuq8dzJrjJ1WfR2XTzJSiNM4ik-LMm9&_nc_ht=scontent-dfw5-2.xx&oh=a7fed4af805cc3a7d951776b18e39faf&oe=5EBB02C4",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/49836960_1115385605299443_4298230217014509568_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_oc=AQkut_lG_8U_YAhqaWQmOzyoDuBAMT0hvx35Vh_3q-N1AdToNiSIqz75XTugwBochnk1IyriPmKZEZ78E0bVKrB0&_nc_ht=scontent-dfw5-2.xx&oh=cb01269c2181afdac68c5992b704f2e9&oe=5EBAF18A",
    "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/20915552_814073105430696_6259654773060954063_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_oc=AQljupn0iUfFvAmVjz0JNiYwbrMhZBP_JdJwpH0MrnYNtJmflgW4_caanBnYSAzXbscf4684w8u-xXCYAipA5SLN&_nc_ht=scontent-dfw5-2.xx&oh=6c0dfb233fde6f32e2ca86df8aef9a3c&oe=5EBC6476"
]
export default class Galeria extends React.Component {

    render() {
        return (
            <div id='galeria'>
                <Dropdown.Divider style={{ borderWidth: '5px', borderColor: 'black' }} />
                <div className="mt-4 break-text-2" align='center'>galeria</div>
                <Dropdown.Divider style={{ borderWidth: '5px', borderColor: 'black' }} />
                <SlideShow
                    images={data}
                    width="920px"
                    imagesWidth="800px"
                    imagesHeight="450px"
                    imagesHeightMobile="56vw"
                    thumbnailsWidth="920px"
                    thumbnailsHeight="12vw"
                    indicators thumbnails fixedImagesHeight
                />
            </div>
        )
    }
}