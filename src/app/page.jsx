"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const consultationRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
  const isSection3InView = useInView(section3Ref, { once: true, margin: "-100px" });
  const isSection4InView = useInView(section4Ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageClick = (imageUrl) => {
    if (window.innerWidth <= 768) {
      setSelectedImage(imageUrl);
    }
  };

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#171717] text-white font-poppins">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#171717]/95 backdrop-blur-sm">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-xl md:text-2xl font-bold text-[#0496FB]"
          >
            AK講座
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group flex items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToConsultation}
              className="bg-[#0496FB] text-white px-6 py-2 rounded-full text-sm md:text-base hover:bg-white hover:text-[#0496FB] transition-all duration-300 flex items-center gap-2"
            >
              <span>無料面談</span>
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-full overflow-hidden"
            >
              <Image
                src="/image/ak.png"
                alt="Avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-16 md:space-y-24 pt-20">
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
          <div className="absolute inset-0">
            <Image
              src="/image/hero-bg.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
              priority
              quality={100}
            />
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#171717]/90 to-[#0496FB]/10" />
            
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0496FB]/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0496FB]/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>

          <div className="relative z-20 text-center space-y-8 max-w-4xl mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-[#0496FB] inline-block transform hover:scale-105 transition-transform">
                  顔出しなし
                </span>
                で
                <br />
                <span className="text-xl sm:text-3xl md:text-4xl">たった</span>
                <span className="text-[#0496FB] inline-block transform hover:scale-105 transition-transform">
                  4ヶ月
                </span>
                <span className="text-xl sm:text-3xl md:text-3xl">で</span>
                <br />
                <span className="text-2xl sm:text-5xl md:text-6xl">
                  ２つの収入の柱が構築できる
                </span>
              </h1>
              <p className="text-base sm:text-2xl md:text-3xl text-[#A4A4A4] leading-relaxed">
                人間関係に縛られない、属人性ゼロの
                <br />
                <span className="text-white font-bold bg-gradient-to-r from-[#0496FB] to-[#0496FB] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px] transition-all duration-300">
                  ストック×フロー収入
                </span>
                を
                <br />
                こっそり構築できる秘密の講座
              </p>
            </motion.div>
            <div className="pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={scrollToConsultation}
                  className="bg-[#0496FB] text-white px-8 sm:px-16 md:px-20 py-4 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl rounded-full hover:bg-white hover:text-[#0496FB] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="font-bold">＼ 先着5名様限定 ／</span>
                  <br />
                  今すぐ無料面談に申し込む
                </button>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-1/3 h-full bg-gradient-to-b from-[#0496FB]/10 via-transparent to-transparent transform -skew-x-12 opacity-40" />
            <div className="absolute top-0 right-1/3 w-1/3 h-full bg-gradient-to-b from-[#0496FB]/5 via-transparent to-transparent transform skew-x-12 opacity-30" />
          </div>
        </header>
        <section ref={section1Ref} className="py-24 bg-[#1E1E1E]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSection1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16">
              <span className="text-[#0496FB]">こんな悩み</span>ありませんか？
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative bg-[#252525] rounded-2xl p-6 md:p-12 space-y-8 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/image/moya.jpg"
                      alt="背景"
                      fill
                      className="object-cover opacity-30"
                      priority
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#252525]/95 to-[#252525]/80" />
                  </div>
                  <div className="relative z-10 space-y-4 md:space-y-6 max-w-3xl mx-auto">
                    <div className="bg-[#1E1E1E]/90 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                      <p className="text-base md:text-2xl">
                        <span className="text-[#0496FB] mr-3">😫</span>
                        毎日の仕事やりたくもない仕事をしている
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E]/90 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                      <p className="text-base md:text-2xl">
                        <span className="text-[#0496FB] mr-3">😢</span>
                        収入を増やしたいけど、何から始めればいいか分からない
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E]/90 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                      <p className="text-base md:text-2xl">
                        <span className="text-[#0496FB] mr-3">😔</span>
                        将来が不安で、老後の資金が心配
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E]/90 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                      <p className="text-base md:text-2xl">
                        <span className="text-[#0496FB] mr-3">😩</span>
                        副業を始めたいけど、身バレしたくない
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E]/90 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                      <p className="text-base md:text-2xl">
                        <span className="text-[#0496FB] mr-3">😩</span>
                        会社員から独立を考えているけど、自信がない
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section ref={section2Ref} className="py-24 bg-[#1E1E1E]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16">
              <span className="text-[#0496FB]">独立・起業</span>に最も重要なこと
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-[#252525] rounded-2xl p-6 md:p-12 space-y-8">
                  <div className="text-center">
                    <p className="text-lg md:text-3xl text-white leading-relaxed mb-8">
                      独立までの
                      <span className="text-[#0496FB] font-bold">準備期間</span>に、
                    </p>
                    <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
                      <div className="bg-[#1E1E1E] rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                        <p className="text-base md:text-2xl">
                          <span className="text-[#0496FB] mr-3">01</span>
                          今の生活は変えることなく
                        </p>
                      </div>
                      <div className="bg-[#1E1E1E] rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                        <p className="text-base md:text-2xl">
                          <span className="text-[#0496FB] mr-3">02</span>
                          裏でこっそり稼ぎ、
                        </p>
                      </div>
                      <div className="bg-[#1E1E1E] rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
                        <p className="text-base md:text-2xl">
                          <span className="text-[#0496FB] mr-3">03</span>
                          最大の準備をすることが「鍵」。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative pt-12">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <span className="animate-bounce block text-3xl md:text-4xl text-[#0496FB]">
                        ↓
                      </span>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-2xl p-6 md:p-8 text-center border-2 border-[#0496FB] transform hover:scale-105 transition-all duration-300">
                      <p className="text-lg md:text-3xl font-bold leading-relaxed">
                        <span className="text-[#0496FB] block md:inline">
                          「ストック型収益」
                        </span>
                        <span className="block md:inline text-center md:text-left my-2 md:my-0">
                          ×
                        </span>
                        <span className="text-[#0496FB] block md:inline">
                          「フロー型収益」
                        </span>
                        <br />
                        「あらかじめ」作っていくことが
                        <span className="text-[#0496FB]">命</span>。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section ref={section3Ref} className="py-24 bg-[#1E1E1E]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSection3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
              <span className="text-[#0496FB]">ストック×フロー収入</span>とは
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="bg-[#252525] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#0496FB]">
                    ストック収入とは？
                  </h3>
                  <p className="text-xl text-white leading-relaxed mb-4">
                    労働や販売活動を直接伴わない
                    <span className="text-[#0496FB] font-bold">
                      継続的な収入
                    </span>
                    の仕組み
                  </p>
                  <div className="space-y-6">
                    <div className="bg-[#1E1E1E] rounded-xl p-4">
                      <h4 className="text-[#0496FB] font-bold mb-2">
                        Kindle本
                      </h4>
                      <p className="text-[#A4A4A4]">
                        著作権を持つ作品から継続的にロイヤリティ収入を獲得
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-xl p-4">
                      <h4 className="text-[#0496FB] font-bold mb-2">
                        ブログ・YouTube
                      </h4>
                      <p className="text-[#A4A4A4]">
                        既存コンテンツから広告収入やアフィリエイト収入が継続的に発生
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-xl p-4">
                      <h4 className="text-[#0496FB] font-bold mb-2">
                        サブスクリプション
                      </h4>
                      <p className="text-[#A4A4A4]">
                        会員制サービスによる安定した月額収入を実現
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="bg-[#252525] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-[#0496FB]">
                    フロー収入とは？
                  </h3>
                  <p className="text-xl text-white leading-relaxed mb-4">
                    提供や活動に応じて得られる
                    <span className="text-[#0496FB] font-bold">
                      一時的な収入
                    </span>
                    の仕組み
                  </p>
                  <div className="space-y-6">
                    <div className="bg-[#1E1E1E] rounded-xl p-4">
                      <h4 className="text-[#0496FB] font-bold mb-2">
                        商品の販売
                      </h4>
                      <p className="text-[#A4A4A4]">
                        商品が売れた時のみ発生する収入。売上は販売数や価格に依存
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-xl p-4">
                      <h4 className="text-[#0496FB] font-bold mb-2">
                        労働による給与
                      </h4>
                      <p className="text-[#A4A4A4]">
                        毎月の労働対価として払われる収入。働いた時間や成果で変動
                      </p>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-xl p-4">
                      <h4 className="text-[#0496FB] font-bold mb-2">
                        フリーランス案件
                      </h4>
                      <p className="text-[#A4A4A4]">
                        プロジェクト完了時のみ得られる収入。案件の規模や難易度で変動
                      </p>
                    </div>
                  </div>
                </div>
                
              </motion.div>
            </div>
          </motion.div>
        </section>
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative w-full pt-[56.25%]" // 16:9のアスペクト比を維持
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/B-THDSFG6ik?controls=1&rel=0" // URLパラメータを追加
              title="ストック×フロー収入の説明"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          <p className="text-center text-[#A4A4A4] mt-4 text-lg">
            ストック×フロー収入について動画でも解説しています
          </p>
        </div>

        <section className="py-24 bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
              <span className="text-[#0496FB]">たった4ヶ月</span>で<br />
              <span className="text-xl sm:text-2xl md:text-4xl">
                理想の収入を実現する方法
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-[#252525] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="text-center mb-6">
                    <span className="text-3xl sm:text-4xl text-[#0496FB] font-bold">
                      STEP 1
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-4">
                      フロー収入で基盤作り
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-[#A4A4A4]">
                    まずは生活費を賄うための
                    <span className="text-white">安定した収入源を確保</span>
                    。短期的な資金需要に対応できる収入基盤を構築します。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-[#252525] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="text-center mb-6">
                    <span className="text-3xl sm:text-4xl text-[#0496FB] font-bold">
                      STEP 2
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-4">
                      ストック収入の構築
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-[#A4A4A4]">
                    <span className="text-white">労働時間に縛られない</span>
                    収入の仕組みを作り、時間とともに成長する資産を構築します。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-[#252525] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <div className="text-center mb-6">
                    <span className="text-3xl sm:text-4xl text-[#0496FB] font-bold">
                      STEP 3
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-4">
                      収入の最適化
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-[#A4A4A4]">
                    両方の収入を
                    <span className="text-white">効率的に組み合わせ</span>
                    、理想的な収入バランスを実現します。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#1E1E1E] min-h-screen flex flex-col items-center">
          <div className="max-w-[1920px] mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0496FB]/20 to-[#04FB43]/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className="relative bg-[#171717]/80 backdrop-blur-xl rounded-2xl p-8 md:p-16 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl border border-[#0496FB]/30 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0496FB] via-[#04FB43] to-[#0496FB]"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0496FB] via-[#04FB43] to-[#0496FB]"></div>
                  
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#0496FB]/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#04FB43]/10 rounded-full blur-xl animate-pulse delay-700"></div>

                  <p className="text-2xl md:text-5xl font-bold leading-relaxed tracking-wider">
                    丸っとこれらを
                    <span className="relative inline-block group-hover:scale-110 transition-transform duration-500">
                      <span className="text-[#0496FB] relative z-10">短期間</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#0496FB] to-[#04FB43] transform -skew-x-12 opacity-30"></span>
                    </span>
                    で
                    <br className="hidden md:block" />
                    同時に学べるのが
                    <br className="md:hidden" />
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0496FB] to-[#04FB43] text-3xl md:text-6xl mt-2 transform hover:scale-110 transition-all duration-500 font-black">
                      AK講座
                    </span>
                    <span className="text-white">です</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-6xl font-bold text-center mb-16">
              <span className="text-[#0496FB]">AK講座</span>の流れ
            </h2>
            <p className="text-base sm:text-lg md:text-3xl text-center mb-8 text-[#A4A4A4]">
              ブログ売却（<span className="text-[#0496FB]">フロー収入</span>）と
              <br />
              kindle本（<span className="text-[#0496FB]">ストック収入</span>）で構築します
            </p>
            <div className="relative">
              <Image
                src="/image/nagare.png"
                alt="AK講座の4ヶ月間の流れを示す図"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl mx-auto cursor-pointer md:cursor-default"
                onClick={() => handleImageClick("/image/nagare.png")}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:hidden">
                タップして拡大
              </div>
            </div>
          </div>
        </section>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#252525] rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <h2 className="text-3xl md:text-6xl font-bold text-center mb-16">
              <span className="text-[#0496FB]">講師紹介</span>
              <br />
            </h2>
            <div className="flex flex-col items-center gap-8">
              <div className="w-56 h-56 relative">
                <img
                  src="image/age.jpg"
                  alt="KA講座講師"
                  className="rounded-full w-full h-full object-cover border-4 border-[#0496FB]"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0496FB] text-white px-6 py-2 rounded-full text-base md:text-lg font-bold">
                  あげ妻
                </div>
              </div>
              <div className="text-center space-y-6">
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      ストック収益１０個以上
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      kindle本３９冊
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      kindle本からの売上、月１００万
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      顔出し無し、名前出ししない系で月400万収益化
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      Instagramフォロワー1.2万人以上
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      オンサル生70事業者
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#252525] rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="w-56 h-56 relative">
                <img
                  src="/image/kko.jpeg"
                  alt="AK講座講師"
                  className="rounded-full w-full h-full object-cover border-4 border-[#0496FB]"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0496FB] text-white px-6 py-2 rounded-full text-base md:text-lg font-bold">
                  k子
                </div>
              </div>
              <div className="text-center space-y-6">
              <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      収入の柱5つ構築
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      5日で3記事書いて25,000円で売却
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      12記事ブログを40,500円で売却
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      個別コンサル生持ち
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      オンライン副業開始7日で6桁達成
                    </span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-[#0496FB] mr-3 text-xl md:text-2xl">
                      ✓
                    </span>
                    <span className="text-white">
                      5ヶ月で100万円
                    </span>
                  </li>
                </ul>
              
            
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={consultationRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="mt-16 bg-gradient-to-br from-[#1E1E1E]/80 to-[#252525]/80 rounded-3xl p-12 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-[#0496FB]/20 backdrop-blur-lg">
            <div className="text-center space-y-12">
              <div className="relative">
                <h3 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0496FB] via-[#04FB43] to-[#0496FB] pb-4 px-4 leading-relaxed">
                  <span className="font-black">無料マネタイズ面談</span>
                </h3>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#0496FB] via-[#04FB43] to-[#0496FB] rounded-full"></div>
              </div>

              <ul className="space-y-4 text-base md:text-xl max-w-2xl mx-auto">
                {[
                  "複数収入源を作っておきたい",
                  "ブログ売却についてもう少し聞きたい",
                  "Kindle本についてもう少し聞きたい",
                  "自分は何を構築したら良いか分からない",
                  "一度相談してから決めたい"
                ].map((text, index) => (
                  <li key={index} className="flex items-center bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-4 md:p-6 transform hover:scale-[1.02] transition-all duration-300 border border-[#0496FB]/10">
                    <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#0496FB] to-[#04FB43] rounded-full flex items-center justify-center mr-4 md:mr-6">
                      <span className="text-white text-sm md:text-xl">✓</span>
                    </span>
                    <span className="text-white/90 font-medium text-sm md:text-base">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-8">
                <div className="relative inline-block bg-[#1A1A1A]/60 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-[#0496FB]/10">
                  <p className="text-lg md:text-3xl font-bold text-white/90">
                    通常30分面談
                    <span className="ml-2 md:ml-4 text-[#A4A4A4] line-through decoration-[#FF4747] decoration-2">
                      40,000円
                    </span>
                  </p>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#FF4747] to-[#FF8347] text-white text-xs md:text-sm px-3 md:px-4 py-1 rounded-full transform rotate-12 font-bold shadow-lg">
                    今なら、０円
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0496FB] via-[#04FB43] to-[#0496FB] rounded-2xl blur-3xl opacity-30"></div>
                  <a 
                    href="https://www.instagram.com/kko_blog/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative bg-gradient-to-br from-[#0496FB] to-[#04FB43] rounded-2xl p-8 md:p-10 text-2xl md:text-6xl font-black text-white shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-white/10"
                  >
                    <div className="flex items-center justify-center gap-2 md:gap-6">
                      <span className="text-xl md:text-5xl font-bold">DM予約</span>
                      <svg className="w-6 h-6 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-xl md:text-4xl">こちら</span>
                    </div>
                    <p className="text-sm md:text-xl mt-2 font-normal">
                      ※先着5名様限定
                      <br />
                      『AK無料面談』とお送りください
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <section ref={section4Ref} className="py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSection4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16">
              よくある<span className="text-[#0496FB]">質問</span>
            </h2>
            <div className="space-y-4 md:space-y-8">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isSection4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-[#252525] rounded-2xl p-4 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 flex items-center">
                      <span className="text-[#0496FB] mr-2 md:mr-4">Q.</span>
                      本当に個人の能力は関係ないのですか？
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-[#A4A4A4] ml-6 md:ml-10">
                      はい。全てマニュアル通りに実行すれば、誰でもできます。
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <section className="space-y-8">
          <div className="text-center text-[#A4A4A4] text-sm">
            © 2024 AK講座 All Rights Reserved.
          </div>
        </section>
        
      </div>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-auto"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src={selectedImage}
              alt="大画像"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
              priority
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 text-white text-sm bg-black/50 px-4 py-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              閉じる
            </motion.button>
          </motion.div>
        </motion.div>
      )}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="bg-[#252525] p-8 rounded-2xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">
                無料カウントリングのお申し込み
              </h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#A4A4A4] hover:text-white"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="お名前"
                className="w-full bg-[#1E1E1E] border border-[#0496FB]/20 rounded-lg px-4 py-3 text-white placeholder-[#A4A4A4] focus:outline-none focus:border-[#0496FB]"
              />
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full bg-[#1E1E1E] border border-[#0496FB]/20 rounded-lg px-4 py-3 text-white placeholder-[#A4A4A4] focus:outline-none focus:border-[#0496FB]"
              />
              <textarea
                placeholder="ご相談内容"
                rows="4"
                className="w-full bg-[#1E1E1E] border border-[#0496FB]/20 rounded-lg px-4 py-3 text-white placeholder-[#A4A4A4] focus:outline-none focus:border-[#0496FB]"
              ></textarea>
              <button className="w-full bg-[#0496FB] text-white py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#0496FB] transition-all duration-300">
                申し込む
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainComponent;