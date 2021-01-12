/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  // 'pt_key=AAJf984RAECzwZKMzVn8dGcIDS6qKirEYEkIrm4K_HChABQulnJ9CK6sPz1NOflOF4S4TOtntgLpLBd8dTo0c-UplwRNNJtQ;pt_pin=%E8%A2%AB%E6%8A%98%E5%8F%A0%E7%9A%84%E8%AE%B0%E5%BF%8633;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  // 'pt_key=AAJf98v-ADD8aNomR4VVWb3lJOyf--E8ih-TDF-RTUBSfzc2TFd6lb0arnuhJhkT-74y5NQkLcA;pt_pin=jd_6cd93e613b0e5;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  // `pt_key=AAJf3InLADD8WK3k6m4BQa5uPY0xCNO_77KW1ExAMw9sZwORL-RmR8x-4WSGIS01JdPAaHxn3aw;pt_pin=jd_45a6b5953b15b;`,
  // `pt_key=AAJf-PyGADCTZfq8uJ822d_tXGNj7EVeEvRv9r13O3BRxTPGjnjC2g1ezxNACWk2FzRxKsqemAM;pt_pin=jd_704a2e5e28a66;`,
  `pt_key=AAJf-VVeADCfU90dQx6UDcM7OQB2smAthYkvPy_S5f9mmOQSzrtYne8qOyN1fVT816e267CWPCM;pt_pin=jd_66f5cecc1efcd;`,
  `pt_key=AAJf-SRSADCsx12ZSVGd5I_UXpnKmRa6gLJ2ZooRB-d6zcVNUwCFDVuWvPVy__90kfq8nwrxPY4;pt_pin=jd_sIhNpDXJehOr;`,
  `pt_key=AAJf5-tYADD_9AG0Jg6JxIjiHGBD2kC6ng_QtQtHatQGJAENxAjXBiK5suO_4lgSWAOfdn-cF14;pt_pin=jd_5851f32d4a083;`,
  `pt_key=AAJf3v5jADCcMSoHMF47wTpr6J6HSJmHO5uD8j0iAGQhZyFgvp04Ib38R6K5VcmvJF4GkVT4wJU;pt_pin=zooooo58;`,
  //   `pt_key=AAJf9m4HADBhVVgIQw1SQLyjsfETeeGa4RFZryFkPWP8vMkk-oI7bCWOmTb_o3CNyldcKGmFj00;pt_pin=14542702-703743;`,
  //   `pt_key=AAJf5zunADBzbaV7S0F-DFyRFCyHYlKw4IH3lLIe6I4VJE9wZobxD9erVzaRmaSEJnZQZrRFnKc;pt_pin=jd_5b54a8d20c8ba;`,
  //   `pt_key=AAJf4yjNADCyJmWZW9Z_tCkKfE0OjISu9WTOFSuyHzNAhGqS3QqR8kEBZY9XNGXg6o_K3axMVqw;pt_pin=ojdo9527;`
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
