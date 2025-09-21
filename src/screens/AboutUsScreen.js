import { Text, Linking, StyleSheet, ScrollView, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

const AboutUsScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView
        style={{
          padding: 16,
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.header, { color: "green" }]}>
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার{"\n"}
          পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়
        </Text>
        <Text style={[styles.header, { color: "#DF4E06" }]}>
          বাংলাদেশ বন গবেষণা ইনস্টিটিউট (বিএফআরআই){"\n"}
          <Text onPress={() => Linking.openURL("https://www.bfri.gov.bd")}>
            www.bfri.gov.bd
          </Text>
        </Text>

        <Text style={styles.sectionTitle}>এক নজরে বিএফআরআই</Text>
        <Text style={styles.paragraph}>
          ‣ বাংলাদেশ বন গবেষণা ইনস্টিটিউট (বিএফআরআই) দেশের বন গবেষণা বিষয়ক
          একমাত্র জাতীয় প্রতিষ্ঠান।{"\n\n"}‣ দেশের বনজ সম্পদের সুষ্ঠু ব্যবহার ও
          প্রযুক্তি উদ্ভাবনের উদ্দেশ্যে “ফরেস্ট রিসার্চ ল্যাবরেটরি” নামে ১৯৫৫
          সালে চট্টগ্রামে এটি প্রতিষ্ঠিত হয়।{"\n\n"}‣ পরবর্তীতে বন ব্যবস্থাপনা
          সংক্রান্ত গবেষণার সুযোগ সৃষ্টি করে ১৯৬৮ সালে উক্ত ল্যাবরেটরিকে বন
          বিষয়ক একটি পূর্ণাঙ্গ জাতীয় গবেষণা প্রতিষ্ঠানে রূপান্তরিত করা হয়।
          {"\n\n"}‣ এ প্রতিষ্ঠানটি ১৯৮৫ সাল থেকে পরিবেশ ও বন মন্ত্রণালয়
          (বর্তমানে পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়) - এর সরাসরি
          নিয়ন্ত্রণে পরিচালিত হচ্ছে।
          {"\n\n"}‣ প্রতিষ্ঠানটি ১৯৯৬ সালে National Agriculture Research System
          (নার্স) এর আওতাভুক্ত হয়।
        </Text>

        <Text style={styles.sectionTitle}>ভিশন</Text>
        <Text style={styles.paragraph}>
          বন ও বনজ সম্পদের টেকসই উন্নয়ন ও জলবায়ু পরিবর্তনজনিত অভিঘাত
          মোকাবেলায় মানসম্মত গবেষণা কার্যক্রম পরিচালনার মাধ্যমে প্রতিষ্ঠানকে
          বিশ্বমানে রুপান্তর করা।
        </Text>

        <Text style={styles.sectionTitle}>মিশন</Text>
        <Text style={styles.paragraph}>
          দেশের বন ও বনজ সম্পদের সংরক্ষণ, জলবায়ু সহনশীল প্রজাতি নির্বাচন, টেকসই
          ব্যবস্থাপনা, উৎপাদন বৃদ্ধি ও সুষ্ঠু ব্যবহারের লক্ষ্যে লাগসই প্রযুক্তি
          উদ্ভাবন এবং উদ্ভাবিত প্রযুক্তিসমূহ ভোক্তা জনগোষ্ঠীকে অবহিতকরণ।
        </Text>

        <Text style={styles.sectionTitle}>অন্যান্য তথ্যাদি</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.title}>স্থাপিত:</Text> ১৯৫৫ খ্রিস্টাব্দ{"\n"}
          <Text style={styles.title}>অবস্থান:</Text> সদর দপ্তর চট্টগ্রাম শহরে
          অবস্থিত{"\n"}
          <Text style={styles.title}>ভূমির পরিমান:</Text> ১৩৫৬ হেক্টর (২৮ হেক্টর
          সদর দপ্তরে){"\n"}
          <Text style={styles.title}>গবেষণা বিভাগ:</Text> বন ব্যবস্থাপনা উইং এর
          অধীনে ১১টি বিভাগ, বনজ সম্পদ উইং এর অধীনে ৬ টি বিভাগ, সাধারণ সেবায় ২ টি
          বিভাগ{"\n"}
          <Text style={styles.title}>ফিল্ড ষ্টেশন:</Text> ২২ টি (মূল ভূমির ১৫ টি
          এবং উপকুলীয় ৭ টি){"\n"}
          <Text style={styles.title}>মোট পদ সংখ্যা:</Text> ৭৯২
        </Text>

        <Text style={styles.sectionTitle}>চলমান গবেষণা</Text>
        <Text style={styles.paragraph}>
          ‣ মাতৃবৃক্ষ নির্বাচন, বীজ উৎপাদন এলাকা চিহ্নিতকরণ, গুণগতমান সম্পন্ন
          বীজ হতে চারা উৎপাদন বৃদ্ধির উপর গবেষণা।{"\n\n"}‣ নার্সারি, বন বাগান ও
          ঔষধি উদ্ভিদের শোকামাকড় ও রোগ বলাই দমন বিষয়ক গবেষণা।{"\n\n"}‣ বিলুপ্ত
          প্রায় কাঞ্চল উদ্ভিদের নার্সারি ও বনায়ন কৌশল উদ্ভাবন এবং সংরক্ষণী
          প্রট সৃষ্টি করা।{"\n\n"}‣ মাতৃবৃক্ষ নির্বাচন, বীজ উৎপাদন এলাকা
          চিহ্নিতকরণ, গুণগতমান সম্পন্ন বীজ হতে চারা উৎপাদন বৃদ্ধির উপর গবেষণা।
          {"\n\n"}‣ নার্সারি, বন বাগান ও ঔষধি উদ্ভিদের শোকামাকড় ও রোগ বলাই দমন
          বিষয়ক গবেষণা।{"\n\n"}‣ বিলুপ্ত প্রায় কাঞ্চল উদ্ভিদের নার্সারি ও
          বনায়ন কৌশল উদ্ভাবন এবং সংরক্ষণী প্রট সৃষ্টি করা।{"\n\n"}‣ বাঁশ, বেত ও
          ভেষজ উদ্ভিদসহ অকাষ্ঠল ও অর্থকরী বনজ সম্পদের উন্নয়ন ও ব্যবস্থাপনা
          বিষয়ক গবেষণা।{"\n\n"}‣ কঞ্চিকলম ও টিস্যু কালচারের মাধ্যমে বাঁশের বংশ
          বিস্তার ও বিলুপ্ত প্রায় গাছের সংরক্ষণে গবেষণা কার্যক্রম।{"\n\n"}‣
          সুন্দরবনের পরিবেশ, প্রতিবেশ ও জীববৈচিত্র্য সংরক্ষণ ও উন্নয়ন
          ব্যবস্থাপনা বিষয়ক গবেষণা।{"\n\n"}‣ উপকূলীয় অঞ্চলে জলবায়ু অভিঘাত
          জনিত প্রভাবের সাথে সামঞ্জস্য রেখে বনসৃজন ও স্থানীয় জনগণের আর্থসামাজিক
          উন্নয়ন বিষয়ক গবেষণা।{"\n\n"}‣ প্রাকৃতিক বনে উদ্ভিদ ও মাটির কার্বনের
          পরিমাণ নির্ণয়।{"\n\n"}‣ সংরক্ষিত বনাঞ্চলের ইকোসিস্টেম মূল্যায়ন
          (Ecosystem Valuation) করা।{"\n\n"}‣ সম্পূর্ণ বৃক্ষে উন্নতমানের আগর
          রেজিন সঞ্চয়ন প্রযুক্তি উদ্ভাবন বিষয়ক গবেষণা।{"\n\n"}‣ জীববৈচিত্রা
          সংরক্ষণ ও উন্নয়ন ব্যবস্থাপনা বিষয়ে গবেষণা।{"\n\n"}‣ কাঠ ও অন্যানা
          বনজ সম্পদের মান উন্নয়ন, সুষ্ঠু ব্যবহার ও বাণিজ্যিক পণ্য উদ্ভাবন
          বিষয়ক গবেষণা।
        </Text>

        <Text style={styles.sectionTitle}>যোগাযোগ: পরিচালক</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.title}>ফোন:</Text> +৮৮-০২৪১৩৮০৭০১ (অফিস){"\n"}
          <Text style={styles.title}>মোবাইল:</Text> ০১৭১৩৪৫৩৬২১{"\n"}
          <Text style={styles.title}>ইমেইল:</Text>{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("mailto:director_bfri@ctpath.net")}
          >
            director_bfri@ctpath.net
          </Text>
          ,{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("mailto:director@bfri.gov.bd")}
          >
            director@bfri.gov.bd
          </Text>
          {"\n"}
          <Text style={styles.title}>ওয়েব সাইট:</Text>{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.bfri.gov.bd")}
          >
            www.bfri.gov.bd
          </Text>
          {"\n"}
          <Text style={styles.title}>ঠিকানা:</Text> বাংলাদশে বন গবেষণা
          ইনস্টিটিউিট
          {"\n"}
          জপিও বক্স নং-২৭৩, ষোলশহর,{"\n"}
          চট্টগ্রাম-৪০০০, বাংলাদেশ।
        </Text>

        <Text style={styles.sectionTitle}>App Developer</Text>
        <Text style={styles.developerInfo}>
          <Text
            style={{ ...styles.paragraph, fontSize: 16, fontWeight: "600" }}
          >
            Bibak Roy
          </Text>
          {"\n"}
          <Text style={styles.title}>Phone:</Text>{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("tel:+8801989952500")}
          >
            +8801989952500
          </Text>
          {"\n"}
          <Text style={styles.title}>Email:</Text>{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("mailto:roybibak1@gmail.com")}
          >
            roybibak1@gmail.com
          </Text>
          {"\n"}
          <Text style={styles.title}>LinkedIn:</Text>{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://linkedin.com/in/bibakroy/")}
          >
            https://linkedin.com/in/bibakroy/
          </Text>
        </Text>

        <Text style={styles.sectionTitle}>Supervised By</Text>
        <Text
          style={{
            ...styles.paragraph,
            fontSize: 16,
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          ইনোভেশন টিম ২০২৩-২৪ ও বন ইনভেন্টরি বিভাগ
        </Text>
        <View style={{ marginBottom: 50 }}></View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 23,
  },
  sectionTitle: {
    color: "#05921F",
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 5,
    fontSize: 14,
    lineHeight: 23,
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 23,
  },
  paragraph: {
    color: "black",
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 23,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 14,
    lineHeight: 23,
  },
});

export default AboutUsScreen;
