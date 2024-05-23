import { View , Image} from '@tarojs/components'
import { AtButton} from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import back from '../../assets/back.jpg'
import questions from "../../data/questions.json";
import questionResults from "../../data/question_results.json";
import Taro from "@tarojs/taro";
import GlobalFooter from "../../components/GlobalFooter";
import {getBestQuestionResult} from "../../utils/bizUtils";

// 结果页面
export default () => {
  // 获取用户选择的答案
  const answerList = Taro.getStorageSync("answerList");
  if(!answerList || answerList.length < 1){
    Taro.showToast({
      title: "答案错误！",
      icon: "error",
      duration: 2000,
    });
  }

  // 获取最佳问题结果
  const result = getBestQuestionResult(answerList, questions, questionResults);

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={back} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
