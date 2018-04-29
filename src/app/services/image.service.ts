import {Injectable} from '@angular/core';
import images from './urls';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class ImageService {
  private images: string[];
  private currentIndex: number;
  private evulates: any;
  private keyLocalStorage = 'evulate';

  constructor(private authService: AuthService) {
    this.images = images;
    // this.images = [
    //   `https://avatars.mds.yandex.net/get-marketpic/205818/market_kaOV375wqsbTUhSMhDgs-w/orig`,
    //   'https://avatars.mds.yandex.net/get-marketpic/466758/market_jCZjAMQ89LV6bGdBXLN3kw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165430/market_InHvaMhxtZV7B5H8HioAxQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/218908/market_bQqPZDt3mj8b3oK0ZQzBeg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/240755/market__U7qCZUkNL_7GeMyfKddkw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/245020/market_H3BAlfs8JL2hUTwLdFz5Qg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/173932/market_5mmFfSZiLRF4R21yDm9bCQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/175578/market_JCEUKL0gKFHAwcNKkShXeQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/175315/market_XtatYZFsqVz5Hlt6fwYCMQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/221955/market_XvWt0s2W7igkXt6CJdRhwg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/169660/market_j3GGU6Cox-4AHq5f4IYgPA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/246300/market_UlQ5ODsGhxoJCGxqdvEpdg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/225310/market_nOIQlRAcmy6dx0SHkcQnRA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/486815/market_WYx4tP2H5x62bNRL7Kk3tw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/247229/market_zOWilIK6vm9TogdWXDIxGg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/248114/market_NbG9zTV_Rdb37HGT7qH8mg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/221955/market_232QHDnb60ipi3XOx1J5aQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/219360/market_PI1JRtEjX4nB0v3_aqOawg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/238105/market_Cg_CMAKP_rn779ZCJRgu-A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/203634/market_ogNcP-lrM8XCuaSsyCLInA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_tRysXTaUOOz-1nAYPX264g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/206654/market_Uus6sPCd78gW6D_Q2v0gXw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/226517/market_wLMz7JMBycaWMBVhMbQtcw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/221366/market_HidArhvzSTXjm8hxTlkqcA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165430/market_912q8KPP19VuZzRtq6FBFw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/203634/market_gKBWW325IrfgwcR9gP0rAg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/205766/market_4W8y9tx-X-dQ5FR4uCbHPA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/234366/market_nJqdMGYwKLtRRM1lIN006A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/239743/market_xo7Kk3-iUrLPBjgbY7xpwQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/203037/market_uqQTMQ1ciYK3bTmAddbWDQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/245020/market_GIj15ZRRnEjkQ01GZDQzBA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/210413/market_CvGAD1lxiZf-LlzKDAWCBQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/367259/market_KyLh8Mvb2iCKjh7xaiMa4Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/219743/market_cGoxkLZ2iANrzQ4mPfkR0w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/175578/market_e9vAYtnMdE7fazliJ_qocg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/177631/market_NLr0lxd2YEoH_Mj1KcBVUQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236212/market_aJ9utD-QlIKaa-Km7nkT1Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/228937/market__y5eScHMK8zXVgiJWo6bnQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364498/market_wDCSMrVeKxsAhX90bheYOg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/208469/market_L7jK_g3TFk4hpFWCSvy5tw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_DSZa6_n_soIY-BukmNMYCQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236356/market_4Kvg3Ogu7_Vyae3FBe9FUA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165151/market_Xi6g4XLjKrHRlaXb74XzSw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/230281/market_6pFH2YV9rifMMd8tecUJUg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/213450/market_h6Q13wtqmirhkP49zmO2iQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/247921/market_VrQkY_XXpF5nJkhRSkLZCg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/366186/market__85tGC4JR_oetBEjSyIwmg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168221/market_jvtCokFTXkpqW_BDYSlekg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/226517/market_0dcD_2xQcuv-ft78fQNZTg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/219360/market_Ln4BBfTWCWo_KcHFeIv1XQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/235547/market_KkpGP9x9jDK1fytO2DRDow/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/366186/market_U8Z2VWjfrJ9eQFWs2lFo2w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/177631/market_ukEPMrwrKEZbi89zZxqsMA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/175315/market_a1AgB7d_2uO4V8G2Dp7Xuw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168879/market_e3RDPxGBFDxeRYdoitx37g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/206654/market_Y2lcqCxz6SZ51uTtI31c6g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/239999/market_WUOCIDw9oLhIJ7pot2nBtQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/204557/market_7_OR5utg0jGwwR8ugH93Sw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/163651/market_f4Ne8LvEAEIzKe3HtuurSw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/205818/market_M-E28V_k9WvAl5N2DH-cDw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/234366/market_Nszn4PLcxk4PchWdsU69Ug/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/205818/market_asCB0Qpk-SLJf_zKABEq3A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/167181/market_txYhACIl-VzKUUKxnZOZfA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/216074/market_1ydiYfLpzTmYririICmm_A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/234366/market__hUP0MqMnzB7IzKy42iUyQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/175127/market_YUGb5Z7KsV5gJjXp-QDdQA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/239999/market_9FJ2bcGxfliIOAh-F58uwQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/201646/market_LZxmBQWw1Q_mbL4s1vhtdA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/477791/market_vLbIbhiixFk5oQxiqVYyhg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/167558/market_UdFb3GhG4wueYM07pCPGyg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/235963/market_XolfJJVkw3MljSVG17EuhA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236853/market_8x_lDDt4nP34deVFwcUnMA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/163434/market_IO388hwt4-_PWsPWDhgTqQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236356/market_sIQZJhV2keZo64Ps0VTzLg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364506/market_w2IzRs7seV2yt9UV2ZPkjw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236853/market_PQ5zPnUsOCxmJpCvF7js3w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/367259/market_uQOb5Td100YREp-nhc8l5A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/231203/market_zkJuc-hu60X7n3G-bE5wsQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/362398/market_lBNEaWD0dbG2bRevrwIrDQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/239999/market_qLL70Eouk6jKXafu1eal8w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/406938/market_tXi6fK6JIiKMrXBfMScBqg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236284/market_8Bnk9JFFAtNfebyjiIIGig/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/219360/market_cajEkKQwCNtDX1TAjG7URg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/225325/market_aEGJxBK2V1STKnm5uKHq6g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/202387/market_0nT91SH1fCiqPteLvc0xoA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/239743/market_31RGha_5FSVbsWKjwwjQVw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/225310/market_1FQPEXUcT58gjummQRyf1w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/247356/market_KImw5_wPZud_i7kF83QX_Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168221/market_PbLJjhvt4rgN_ix_WjYSpg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/228527/market_M9ktDM3jP49mJNlZ4e3DKw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/248114/market_VnOUkrNN70v1aIuJiw0g5A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/167132/market_2sm3t_WgFb_XCf8aGgp8iw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/241976/market_e2n71X5ZVYYf69B_mWYP1Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/226517/market_5SKbvrLISKbTtxK6fffXjg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/173412/market_rKSNRVwMXmyjhTck4WkQ8Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168879/market_nEkKjVutckToGIjzU-k-QQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236853/market_3bKzGyuMpbM8z94ecV9tKw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/172627/market_vlyDsmqFo1D-1HfbWGQxkA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/374599/market_8_GUBnf0Sq8NvxN-U3z6nQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/245020/market_dAxR4wP0QUfK5PaYOzaOLA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/250283/market_GJNzSLImQLbVYQp8aMU1dw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/167132/market_7r4lM0QRxXkdzhuKPOIKoA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/167181/market_Zc9snVOYwobcm6tys2U1mQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165151/market_044KLxshJhZnIaSg2Ete0w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364755/market_MiDEXJm-w8XalwThM7hO4w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_PQLzHYBtBOHWJVFMIZQDwQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/172627/market_Izs-le1wKGHesfFz0uxYsw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/231203/market_dvGggIVSN8MXAQ9NrmGk2Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364755/market_-sEesUxU-vu0bior7uBGlg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168879/market_gRg_AGQgrwcIzD4zRFo8vQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/171655/market_e4fbsK3a4f5lz1JTCjD6BQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/225325/market_bk2AouGSBotyC-OrDMICjw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/213450/market_EzfZcL9ejLIsVcQd-66Akg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364506/market_HgSSMq2Bau2W-1WiHelXUA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/210814/market_NO_THIBrsPKl8jw0FG4CFA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/196766/market_1QfQnppCtFW05VyntpsiMA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/175127/market_LoAYoFti-7nddm261LXwfg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168221/market_6Dl7pxqn4ZevGD_5hM99Sg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/223477/market_5HfA010qEZlisJEe-tX44Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/209514/market_3q1cPWH5zpEeS0xuYQ5Jvw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/229641/market_PsIKGJjuVY0-ru7yT51uQg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_cfaV5LIH0BBeCniZU6otmw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/251258/market_9kg4l-N8lNdjxee4SPHOzQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_3v6e_uDl0OXABSGv56ex8Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/250421/market_j7ICznMHfqJPyUWYlm8ZTQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/246300/market_Nlp75SjqtuEgct2AdwMrLQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_qUSX8t3YptXEDTY-WV6B7Q/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/203633/market_Q1qn-1RUAvDkZRhNBQWumw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/203633/market_6lL7h8SCJWo77AjGn5dQYQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/229624/market_pwWdfwHpIX4csuJHKyipsg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168221/market_gJHFKzDIAKbSUx77a_Pcdg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/172106/market_f4QyE97nvZ_dwdtgcKXHBw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/225051/market_qB3Frh_IG8bTuVi4ePVjxQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/366186/market_gHVAXRiJk5ssuDk3GUYdmA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_DBPEuh-0zyiqLSNPJ7dzuQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/208469/market_gAQfNj8-c2OZIdGAmDUDqA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/222244/market_3nidAcxm3OVzednU4ReowQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/229624/market_bl5jkjFWqXxi-utT51AHXg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/193095/market_qOBDlZfX_5wM8iVJw2B9iQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/226983/market_Go5xEPPlxOnFYV0Dro4kPQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165151/market_55-N6ThQ3Z0WDHPATDUt2w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/204557/market_DwKtupsQJBlrIhHI3B0dJw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/374599/market_5-lg7Rfxmm7RxPU9xtvhHg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/245913/market_JUzcQL69_TNHW7gYMywCww/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165151/market_b-_Xq96buTNApNx1oC-WvQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236284/market_j3hq5A7kU6LlXTuX0E2XGQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/175315/market_S2KW7qWYOQJK9zR4p3RJrw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/373800/market_1mB3Jd9AoFSRlNErTQogvw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/177631/market_1Z2H24yN8rjou5bCwtjhuw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/171655/market_OkoYxq1jxNtq7A8GZgd4CQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/213450/market_-kPxHpPjyBCdihb-q3QQOA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/233556/market_UAs_yjFK36n-NBFZrDeAeQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236284/market_UgoEqpTE8IU3hrioeKWAvQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/169660/market_42iYYQ1dTF7omzgNyT33wA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364506/market_k7zVpsQ9gZx0lCqpVhjYNQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/245020/market_DspoZMkAYv65ucAWnkFuNg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/247921/market_D8tNkkZTPJ8G_Atkygzxog/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/246786/market_2RQXjY_omn90IkYVD7eb4w/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/206654/market_p9xbdYjeLEcl6rMHfDhf1g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/239743/market_xU4lO8BQmdXdZeVxs33mLg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165151/market__F7lNhnTkcC27-uP1xurvw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/235547/market_QxC8w7sRsyfyGuZxlqpRSQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/216074/market_IfsN7sfindC6TQUxUXLNUA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/330747/market_U02Er0_Cc6IusWF8KhmReg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/203634/market_ZCgrJzr1h-gfii24rIlsZg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/406938/market__m10vLDT0iE14muR7NMMBg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/372231/market_oZp9hOYepgVnjOvjf81eVQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/205818/market_Wjq9UJ7BydjOwXS11RIJBw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236853/market_09Y7Jo4dpx7ah9Zm8wKf2A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/165430/market_ZpUQx3H7W8817mxulAZDHg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/203934/market_2ckheKm_hYk6kIcJ0GJzkA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/248830/market_peX6SgcH5EDofuSqsC_Cdw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364506/market_UzUcc0JImZZj0DKi3z5eag/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/196254/market_IOuVH2ZfuvQoXMf0c8-EaA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/228937/market_wPTRQFQSCopNHzULN-LlRA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/229624/market_BLk-shHj4lt7aYsxJ1LTtA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/247921/market_tiCbJWk5v1OXvedqbHfG7A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/330747/market_lZanUCmgKguoXP2Q7kTgvQ/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/168221/market_i9zTCyobh-bt_GUmcW_Ptw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236318/market_9t5Ro0ZvYt4TIzG2prOXbw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/173412/market_QUcOHm32p4fdMq9Y4_BZHA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/196254/market_WG7ZpJjl7narTxNprtpHaA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/229624/market_eEu5q1juR4-ZNgu-iuzHsg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/176166/market_52CzaPA4oZusSnzQODU-wA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/477791/market_Wr6_6gFHLFMm44lpYNJi3A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/331110/market_0va3qYdwRFnHQlD4mv_XKw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/251258/market_eTxNc0uI3MvOjub5-Dk0vA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/364498/market_RAhaaoCvMf8NztMGqviyGw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/234366/market_ygj6VXP3XNL9L8-zGRzUQw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/174581/market_8S-z0Qm-sBvrFVPwjTadpw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/247921/market_acAIY_HfIgZB8MnpDbTvOw/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236356/market_CD9J-jtB5VtchFDVySrA8g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/224461/market_RaaXsHxOQwyYDFCyfEbr6g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236284/market_ZdmgY2h8coekGabmythy5A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/196766/market_zpAJAW7-mNuCCP3bGqOScg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/225310/market_mU1XgkUTkH3HA_wBgrAkGA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/245020/market_Y9krkhtVg-1gYSOf4nlYcg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/250283/market_ietlRUUfFNyitPDbntowHg/orig',
    // ];
    // this.images = [
    //   'https://avatars.mds.yandex.net/get-marketpic/236356/market_CD9J-jtB5VtchFDVySrA8g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/224461/market_RaaXsHxOQwyYDFCyfEbr6g/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/236284/market_ZdmgY2h8coekGabmythy5A/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/196766/market_zpAJAW7-mNuCCP3bGqOScg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/225310/market_mU1XgkUTkH3HA_wBgrAkGA/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/245020/market_Y9krkhtVg-1gYSOf4nlYcg/orig',
    //   'https://avatars.mds.yandex.net/get-marketpic/250283/market_ietlRUUfFNyitPDbntowHg/orig',
    // ];

    const data = localStorage.getItem(this.keyLocalStorage);
    this.evulates = data ? data.split(',') : [];
    console.log('количество оценок в локалсторадже: ', this.evulates);
    console.log('количество изображений всего: ', this.images.length);
    if (this.evulates.length > 0) {
      this.images.splice(-this.evulates.length);
    }
    console.log('количество изображений осталось после вычитания: ', this.images.length);
    this.currentIndex = this.images.length;
  }

  public getCurrentIndex(): number {
    if (!this.currentIndex) {
      console.log('Закончились картинки!');
      this.authService.updateUserData(this.evulates);
    }
    return this.currentIndex;
  }

  public popImage(): string {
    this.currentIndex--;
    return this.images.pop();
  }

  public setReaction(evulate: number): any {
    this.evulates.push(evulate);
    localStorage.setItem(this.keyLocalStorage, this.evulates);
  }
}
