import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon, Right } from "native-base";
import styles from "./styles";

export default class PrivacyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "개인정보 이용 약관",
      headerLeft: (
        <TouchableOpacity
          style={{ marginLeft: 25, flexDirection: "row" }}
          onPress={() => navigation.navigate("check")}
        >
          <Icon style={{ color: "#fff" }} name="arrow-back" />
        </TouchableOpacity>
      )
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={{ fontSize: 20 }}>
              {"\n"}Love Pet(‘회사’) 개인정보 처리방침 {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>제1조. 목적{"\n"}</Text>
            <Text>
              Love Pet(‘회사’)는 개인정보보호법에 따라 이용자의 개인정보 보호 및
              권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할
              수 있도록 다음과 같은 처리방침을 두고 있습니다. 회사는
              개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는
              개별공지)을 통하여 공지할 것입니다. 본 방침은부터 2019년 0월
              0일부터 시행됩니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보의 이용 목적 {"\n"}
            </Text>
            <Text>
              회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는
              다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될
              시에는 사전동의를 구할 예정입니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}서비스 회원가입 및 관리 {"\n"}
            </Text>
            <Text>
              회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
              회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스
              부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의
              여부 확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존
              등을 목적으로 개인정보를 처리합니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}민원사무 처리 {"\n"}
            </Text>
            <Text>
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지,
              처리결과 통보 등을 목적으로 개인정보를 처리합니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}재화 또는 서비스 제공 {"\n"}
            </Text>
            <Text>
              서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증,
              연령인증, 요금결제·정산 등을 목적으로 개인정보를 처리합니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}마케팅 및 광고에의 활용 {"\n"}
            </Text>
            <Text>
              신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보
              제공 및 참여기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및
              광고 게재 , 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스
              이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보 파일 현황 {"\n"}
            </Text>
            <Text>
              개인정보 파일명 : Account{"\n"}
              {"\n"}
              개인정보 항목 : 비밀번호, 생년월일, 성별, 로그인ID, 휴대전화번호,
              이름, 이메일, 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그
              {"\n"}
              {"\n"}
              수집방법 : 앱 서비스{"\n"}
              {"\n"}
              보유근거 : 불만 또는 분쟁처리를 위한 보유{"\n"}
              {"\n"}
              보유기간 : 3년{"\n"}
              {"\n"}
              관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년{"\n"}
              {"\n"}
              개인정보 파일명 : Payment{"\n"}
              {"\n"}
              개인정보 항목 : 결제기록{"\n"}
              {"\n"}
              수집방법 : 앱 서비스{"\n"}
              {"\n"}
              보유근거 : 결제 사실 확인을 위한 보유{"\n"}
              {"\n"}
              보유기간 : 5년{"\n"}
              {"\n"}
              관련법령 : 대금결제 및 재화 등의 공급에 관한 기록 : 5년{"\n"}
              {"\n"}
              개인정보 파일명 : BankAccount{"\n"}
              {"\n"}
              개인정보 항목 : 은행계좌정보, 주민등록번호{"\n"}
              {"\n"}
              사업자 정보 : 사업자 명, 휴대폰 번호, 사업자 번호, 이메일{"\n"}
              {"\n"}
              수집방법 : 앱 서비스{"\n"}
              {"\n"}
              보유근거 : 돌봄 서비스 대금 정산 및 세금계산서 발행을 위한 보유
              {"\n"}
              {"\n"}
              보유기간 : 5년{"\n"}
              {"\n"}
              관련법령 : 대금결제 및 재화 등의 공급에 관한 기록 : 5년{"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보의 처리 및 보유 기간 {"\n"}
            </Text>
            <Text>
              이용자의 개인 정보는 원칙적으로 개인정보의 수집 및 이용목적이
              달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의
              이유로 명시한 기간 동안 보존합니다.
              {"\n"}
              {"\n"}
              회사 내부 방침에 의한 정보보유 사유{"\n"}
              {"\n"}
              관련법령에 의한 정보보유 사유{"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}홈페이지 회원가입 및 관리 {"\n"}
            </Text>
            <Text>
              홈페이지 회원가입 및 관리와 관련한 개인정보는 수집.이용에 관한
              동의일로부터 5년까지 위 이용목적을 위하여 보유.이용됩니다.
              {"\n"}
              {"\n"}
              보유근거 : 회원 정보 관리{"\n"}
              {"\n"}
              관련법령 : 계약 또는 청약철회 등에 관한 기록 : 5년{"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}제화 또는 서비스 제공 {"\n"}
            </Text>
            <Text>
              제화 또는 서비스 제공와 관련한 개인정보는 수집.이용에 관한
              동의일로부터 5년까지 위 이용목적을 위하여 보유.이용됩니다.
              {"\n"}
              {"\n"}
              보유근거 : 결제 사실 확인을 위한 보유{"\n"}
              {"\n"}
              관련법령 : 대금결제 및 재화 등의 공급에 관한 기록 : 5년{"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}민원사무 처리{"\n"}
            </Text>
            <Text>
              민원사무 처리와 관련한 개인정보는 수집.이용에 관한 동의일로부터
              3년까지 위 이용목적을 위하여 보유.이용됩니다.
              {"\n"}
              {"\n"}
              보유근거 : 불만 또는 분쟁 처리를 위한 보유{"\n"}
              {"\n"}
              관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년{"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보의 처리 위탁{"\n"}
            </Text>
            <Text>
              회사는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법
              제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게
              제공합니다.
              {"\n"}
              {"\n"}
              회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.{"\n"}
              {"\n"}
              (주)유디아이디{"\n"}
              {"\n"}
              개인정보를 제공받는 자 : (주)유디아이디{"\n"}
              {"\n"}
              제공받는 자의 개인정보 이용목적 : 휴대전화번호{"\n"}
              {"\n"}
              제공받는 자의 보유.이용기간: 지체없이 파기{"\n"}
              {"\n"}
              이용자 및 법정대리인의 권리와 그 행사방법{"\n"}
              {"\n"}
              정보주체의 권리,의무 및 그 행사방법 이용자는 개인정보주체로서
              다음과 같은 권리를 행사할 수 있습니다.{"\n"}
              {"\n"}
              정보주체는회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련
              권리를 행사할 수 있습니다.{"\n"}
              {"\n"}
              개인정보 열람요구{"\n"}
              {"\n"}
              오류 등이 있을 경우 정정 요구{"\n"}
              {"\n"}
              삭제요구{"\n"}
              {"\n"}
              처리정지 요구{"\n"}
              {"\n"}
              제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지
              제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실
              수 있으며 회사는  이에 대해 지체 없이 조치하겠습니다.
              {"\n"}
              {"\n"}
              정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
              경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
              이용하거나 제공하지 않습니다.
              {"\n"}
              {"\n"}
              제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자
              등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법
              시행규칙 별지 제11호 서식에 따른 위임장을 제출 하셔야 합니다.
              {"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"} 처리하는 개인정보의 항목 작성{"\n"}
            </Text>
            <Text>
              회사는 다음의 개인정보 항목을 처리하고 있습니다.{"\n"}
              {"\n"}
              홈페이지 회원가입 및 관리{"\n"}
              {"\n"}
              필수항목 : 비밀번호, 생년월일, 성별, 로그인ID, 이름, 접속 IP 정보,
              쿠키{"\n"}
              {"\n"}
              선택항목 : 휴대전화번호, 이메일, 결제기록{"\n"}
              {"\n"}
              민원사무 처리{"\n"}
              {"\n"}
              필수항목 : 로그인ID, 이름, 결제기록{"\n"}
              {"\n"}
              선택항목 : 은행계좌정보{"\n"}
              {"\n"}
              제화 또는 서비스 제공{"\n"}
              {"\n"}
              필수항목 : 성별, 로그인ID, 이름, 결제기록{"\n"}
              {"\n"}
              선택항목 :{"\n"}
              {"\n"}
              개인정보 파기절차 및 방법{"\n"}
              {"\n"}
              개인정보의 파기 회사는 원칙적으로 개인정보 처리목적이 달성된
              경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및
              방법은 다음과 같습니다.
              {"\n"}
              {"\n"}
              파기절차{"\n"}
              {"\n"}
              이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우
              별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후
              혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한
              경우가 아니고서는 다른 목적으로 이용되지 않습니다.
              {"\n"}
              {"\n"}
              파기기한{"\n"}
              {"\n"}
              이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
              보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성,
              해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을
              때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일
              이내에 그 개인정보를 파기합니다.
              {"\n"}
              {"\n"}
              파기방법{"\n"}
              {"\n"}
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
              사용합니다.{"\n"}
              {"\n"}
              종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
              파기합니다.{"\n"}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보의 기술적/관리적 보호 대책{"\n"}
            </Text>
            <Text>
              개인정보의 안전성 확보 조치 회사는 개인정보보호법 제29조에 따라
              다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를
              하고 있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보 취급 직원의 최소화 및 교육{"\n"}
            </Text>
            <Text>
              개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
              개인정보를 관리하는 대책을 시행하고 있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보의 암호화{"\n"}
            </Text>
            <Text>
              이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
              본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화
              하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
              있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}해킹 등에 대비한 기술적 대책{"\n"}
            </Text>
            <Text>
              회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을
              막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며
              외부로부터 접근이 통제된 구역에 시스템을 설치하고
              기술적/물리적으로 감시 및 차단하고 있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보에 대한 접근 제한{"\n"}
            </Text>
            <Text>
              개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
              부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
              조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
              접근을 통제하고 있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}접속기록의 보관 및 위변조 방지{"\n"}
            </Text>
            <Text>
              개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고
              있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능
              사용하고 있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}문서보안을 위한 잠금장치 사용{"\n"}
            </Text>
            <Text>
              개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한
              장소에 보관하고 있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}비인가자에 대한 출입 통제{"\n"}
            </Text>
            <Text>
              개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해
              출입통제 절차를 수립, 운영하고 있습니다.
            </Text>
            <Text style={{ fontSize: 20 }}>
              {"\n"}개인정보보호책임자 및 담당자의 연락처{"\n"}
            </Text>
            <Text>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
              처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
              같이 개인정보보호책임자를 지정하고 있습니다.
              {"\n"}
              {"\n"}
              개인정보 보호책임자{"\n"}
              {"\n"}
              성명 :이태홍{"\n"}
              {"\n"}
              직책 :CEO{"\n"}
              {"\n"}
              직급 :사장{"\n"}
              {"\n"}
              연락처 :00-000-0000, 000@naver.com, 00-000-0000{"\n"}
              {"\n"}※ 개인정보 보호 담당부서로 연결됩니다.{"\n"}
              {"\n"}
              개인정보 보호 담당부서{"\n"}
              {"\n"}
              부서명 :000부서{"\n"}
              {"\n"}
              담당자 :000{"\n"}
              {"\n"}
              연락처 :00-000-0000, 000@naver.com, 00-000-0000{"\n"}
              {"\n"}
              정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든
              개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
              개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는
              정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
              {"\n"}
              {"\n"}
              고지의 의무{"\n"}
              {"\n"}
              개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
              전부터 공지사항을 통하여 고지할 것입니다.
              {"\n"}
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
