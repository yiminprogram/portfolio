type cityValue = {
  input: string;
  output: string;
};

const cityData: cityValue[] = [
  { input: '基隆', output: '基隆' },
  { input: '臺北', output: '臺北' },
  { input: '台北', output: '臺北' },
  { input: '新北', output: '板橋' },
  { input: '桃園', output: '新屋' },
  { input: '新竹', output: '新竹' },
  { input: '苗栗', output: '國一S132K' },
  { input: '臺中', output: '臺中' },
  { input: '台中', output: '臺中' },
  { input: '彰化', output: '彰師大' },
  { input: '雲林', output: '古坑' },
  { input: '嘉義', output: '嘉義' },
  { input: '台南', output: '永康' },
  { input: '臺南', output: '永康' },
  { input: '高雄', output: '高雄' },
  { input: '屏東', output: '恆春' },
  { input: '宜蘭', output: '宜蘭' },
  { input: '花蓮', output: '花蓮' },
  { input: '台東', output: '臺東' },
  { input: '臺東', output: '臺東' },
  { input: '澎湖', output: '澎湖' },
];

export const cityNameFilter = (cityName: string) => {
  const city: cityValue = cityData.filter((ele) => ele.input === cityName)[0];
  if (city) return city.output;
  throw new Error(
    '請輸入有效縣市名稱，或請稍待再次輸入查詢，如無法查詢可能為系統未增加該縣市之天氣資料',
  );
};
