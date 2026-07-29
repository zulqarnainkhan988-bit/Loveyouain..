/* ===== DATA: poems, reasons, wishes, love letter, notifications ===== */
const SEED_POEMS = [
  {id:"p1", title:"اختصار", lang:"ur", body:"اکیس گرام وزنی روح\nاور سارے جذبات\nصرف اکیس گرام وزنی روح کے لیے\nیار یہ جگہ کتنی کم ہے نہ\nمحبت کے لیے\nاور تم اس میں\nنفرت کیسے پال لیتے ہو یار\nمحبت کے علاوہ جذبات\nکیسے پال لیتے ہو\nتم اس شخص کو دیکھو تو جانو\nکس قدر کم ہے یہ جگہ\nاس شخص کی محبت دل میں بسانے کے لیے\nیہ جگہ\nاور زیادہ نہیں تو\nموجودہ وزن کا چار گنا ہونا چاہیے تھی\nیا پھر کم از کم\nدو گنا\nتب تم جان سکتے\nاس سے محبت کے لیے یہ پیمانہ کتنا کم ہے\nنہایت ہی کم ہے\nتم اس شخص کو دیکھو تو جانو"},
  {id:"p2", title:"So Short, So Stubby", lang:"en", body:"\"So short, so stubby\"\nOne night remains\nAnd she has to go\nHow much impermanent the night is?\nSo short, so stubby\nShort to keep my words\nShort to Wipe her eyes\nFrom the tears\nShe has no control\nSo short\nTo feel her touch\nSo short\nTo listen to her eyes\nSo short\nTo kiss her forehead\nI always dreamt of\nSo short\nTo hug her and say\nYou will never be forgotten my beloved\nSo short\nTo remember the nights\nWe had spent\nLoving each other\nBut without expressing our love\nSo short\nTo stop her from departure\nSo short\nTo feel her first love\nSo short\nTo annoy her\nSaying ' O you Silly and Mindless'\nSo short\nTo tell her\nHow much I love her\nAnd will ever...."},
  {id:"p3", title:"Her First Voice Note", lang:"en", body:"First voice note from her\nIt was sweeter than Keats' poems\nDeeper than Shakespeare's Sonnets\nMore romantic than Wordsworth's verses\nLovelier than Nightingale's song\nIt would take\nNo less than\nThe whole life\nTo forget\nThe first voice note from her\nO my beloved\nWhy would I try\nTo forget those words\nLovelier than\nAny music on the Earth\nThose words will never be forgotten\nFor\nThey remind me of\nThe love\nThat has no extent\nYou keep in your heart"},
  {id:"p4", title:"شاعرہ کی رہبت", lang:"ur", body:"لامحدود خدشات میں گھرا لڑکا\nاگر کسی ایک چیز کے بارے مطمئن ہے تو\nوہ یہ ہے\nاے پری چہرہ محبوب\nتمہارے چاہنے والے کے نام کو زوال نہیں\nکہ وہ جانتا ہے\nوہ کسی شاعرہ کی\nپہلی اور آخری محبت ہے۔"},
  {id:"p5", title:"آزادی مبارک", lang:"ur", body:"آزادی کے نام پر بٹوارا\nیہ تو کوئی آزادی نہ ہوئی\nکیا تمہیں سوچنے کی آزادی ہے؟\nکیا تمہیں اپنے خیالات کے اظہار کی آزادی ہے؟\nہرگز نہیں\nزندگی نے گر مہلت دی\nہم اپنے بچوں کو حقیقی آزادی کا مطلب سمجھائیں گے\nایک ایسا معاشرہ بنائیں گے\nجہاں ہر دھرم کو تحفظ حاصل ہو\nجہاں اقلیتوں کو قتل کرنا\nحصولِ جنت کا ذریعہ نہ سمجھا جائے\nجہاں تم اپنے خیالات کا اظہار کرو\nاور پیشہ ور قاتل تمہیں اٹھا کر نہ لے جائیں\nایک ایسا معاشرہ\nجہاں تم محبت کو فروغ دے سکو\nمحبت اور انسانیت کو\nبلا جھجک اپنا دھرم کہہ سکو\nاور ایسے میں تم پر فتوٰی صادر کرنے والا کوئی نہ ہو\nایک ایسا معاشرہ\nجہاں تم اپنی مرضی سے جینا سیکھ جاؤ\nتب تم واقعی آزاد ہو گے\nتب تمہیں یہ کہنے کا حق حاصل ہو گا\n\"آزادی مبارک\""},
  {id:"p6", title:"Thinking of Her", lang:"en", body:"Thinking of her\nIn a moonlit night\nWhat's better than this?\nNothing!"},
  {id:"p7", title:"تیرے جانے کے بعد", lang:"ur", body:"تیرے جانے کے بعد سمجھا میں\nمرگ، فراق سے کیوں بہتر ہے۔"},
  {id:"p8", title:"سندر آنکھوں والی لڑکی", lang:"ur", body:"یارو اس کو کوئی سمجھائے\nاس کی سحر بھری یہ آنکھیں\nشب کو تکیہ گیلا کرتے بالکل اچھی نہیں لگتیں\nیارو اس سے کوئی تو پوچھے\nوقت سے پہلے سونے والی\nان آنکھیں میں ذرا تم سوچو\nشب خیزی کب جچتی ہے\nیارو اس کو کوئی سمجھائے\nمیں یہ منظر دیکھ نہیں سکتا\nخواب میں آئے، ہاتھ چھڑاتے\nمبہم سائے دیکھ نہیں سکتا\nیارو اس کو کوئی سمجھائے\nسندر آنکھوں والی لڑکی"},
  {id:"p9", title:"راہ تکتی آنکھیں", lang:"ur", body:"اب تھک چکی ہیں\nزندگی گویا تھم سی گئی ہے\nجیسے کسی شخص کو\nعین جوانی میں کوئی حادثہ پیش آ جائے\nاور سب کچھ اچانک رک جائے\nایسے میں اسے بس کسی مسیحا کا انتظار ہو\nجو بیمار کو سبھی مصائب سے چھٹکارا دلا دے\nاے میرے پیارے محبوب!\nتم میرے لیے اس مسیحا سے بڑھ کر ہو\nزندگی میں تمہارا موجود ہونا\nکسی بھی مسیحا کی موجودگی سے بڑھ کر ہے"},
  {id:"p10", title:"زندگی", lang:"ur", body:"جیسے کسی اولڈ بک سنڑ میں پڑی سالوں پرانی کتاب\nکہ جس میں بیشتر ابواب\nرائیگانی کی نظر ہوئے\nجب تم کہانی میں نہیں آئے تھے\nچند باب رنگین\nجب تمہارا ساتھ میسر تھا\nان لمحوں میں اتنی طاقت تو تھی\nکہ پچھلی سبھی اداسیوں کو فراموش کیا جا سکے\nکہانی کو\nایک نیا موڑ دیا جا سکے\nسب کچھ اچانک خوبصورت ہو جائے\nمگر جب تم اچانک چلے جاؤ\nزندگی\nپہلے سے بھی زیادہ بے معنی ہو جائے\nکہ جب تم نہیں آئے تھے\nآ جاؤ کہ\nاسے پھر سے کوئی پڑھے\nزندگی کو خواہش اب بھی ہے\nکوئی تمہارا منتظر\nاب بھی ہے\n~فاتح"},
  {id:"p11", title:"کسے فکر ہے", lang:"ur", body:"جو جا کے پوچھے\nیہ کون ہے جو\nنصف شب کو ویران راہوں پہ چل رہا ہے\nکسے فکر ہے\nجو رستہ روکے\nاور پوچھے\nکیسا ہجر ہے\nجو آدمی کو نگل رہا ہے\nکسے فکر ہے\nجو یہ سمجھے\nہیں کچھ آلام\nاس مسخرے کے\nکوئی تو یارو\nبات ہو گی\nاک آوارہ شاعر شبِ ہجراں\nخامشی سے مر رہا ہے\nکسے فکر ہے"},
  {id:"p12", title:"الحب", lang:"ur", body:"وہ آخری شاہکار جو میں نے دیکھا\nتمہاری آنکھیں تھیں\nوہ آخری محبت بھرا گیت جو میں نے سنا\nتمہاری آواز تھی\nوہ آخری لمحہ جس میں میں زندہ تھا\nوہ لمحہ تھا\nجب تم مسکرائے تھے\nوہ لمحہ\nجس کے بعد\nتمہارے بیمار نے ہنسنا چھوڑ دیا\nوہ لمحہ تھا\nجب تم روئے تھے\nالحب!\nمسکرایا کرو\nکہ تمہارا شاعر ابھی جینا چاہتا ہے"},
  {id:"p13", title:"بِساط", lang:"ur", body:"تم مجھ سے میری بساط بارے پوچھتے ہو\nیہ کوئی لمبی فہرست نہیں چیزوں کی\nچند نظمیں ہیں ثروت کی\nکچھ نصرت کے پرانے گیت ہیں\nاور ہاں\nمیرؔ کی غزلیں\nان کے بغیر تو زندگی بے رنگ ہو جائے گی\nچند میٹرک کے دوست\nکچھ کتابیں ہیں\nاور سب سے بڑھ کر\nایک پرانی لازوال محبت\nجو بوڑھے برگد کے درخت\nاور پرانی جینز جیسی ہے\nجو گزرتے وقت کے ساتھ صرف مضبوط ہونا جانتی ہے\n~فاتح"},
  {id:"p14", title:"مدتِ ہجر", lang:"ur", body:"مدت ہوئی، گھر نہیں دیکھا، تنہائی سے اپنی ڈر جاتے ہیں\nکتنے اچھے لوگ ہیں یارو، کیمپس سے سیدھا گھر جاتے ہیں\nگم ہے بیچ اغیار وہ چہرہ، یار ہی اپنے یاد نہیں\nمنہ سے اک لفظ نہیں کہتے، دل ہی دل میں لڑ جاتے ہیں\nجاتے ہی اس کے، ہو جاتے ہیں بے گھر اور بے مصرف سے\nآتے ہی اس کے، جاں ملتی ہے، سارے کام سنور جاتے ہیں\nاس کو چاہا، جان لٹا دی، عمر گزاری راہیں تکتے\nبس یہی الزام ہیں سارے، سارے ہی اپنے سر جاتے ہیں\nزوالِ امن، سوالِ ہم ہیں مشعل، کہ سو مرگ\nدرندوں کے بیچ ہیں رہتے، بھیڑ میں انہی کی مر جاتے ہیں"},
  {id:"p15", title:"کوئی شخص دلکشی سے خالی نہیں", lang:"ur", body:"ذوق سبھی کے خوبصورت ہیں\nمگر\nہائے یہ آرٹس سے جڑے لوگ"},
  {id:"p16", title:"مجھے نہیں معلوم", lang:"ur", body:"میں نے کتنی بار\nاس کا دل توڑا ہے\nآج ایک بار پھر\nایسا ہوا ہے\nاور میں اس سے پوچھ رہا ہوں\nStill love me?\nCan you come back?\nجب تک اس کا جواب نہیں آتا\nسانسیں منتشر رہیں گی\nاور میرا مقدر\nاس کے ایک ریپلائے میں لکھا رہے گا۔"},
  {id:"p17", title:"میں تم سے خفا ہوں", lang:"ur", body:"\"مگر کیوں\"\n\"کیوں بتاؤں\"\n\"دیکھو، بتاؤ\"\n\"میں نہیں بتانے والا\"\n\"دیکھو لڑکے! میری سانس رکنے لگتی ہے\"\n\"مگر تم نے تو کہا تھا۔۔۔\"\n\"کوئی اور بات کر لیتے؟\"\n\"ٹھیک ہے\"\n\"تم کبھی بھی مجھ سے خفا نہ رہ سکو، خفا رہنے کا حق بس مجھے ہے\"\nوہ ٹھیک کہتی ہے\nایک خوبصورت لڑکی سے آخر کتنی دیر خفا رہا جا سکتا ہے"},
  {id:"p18", title:"حیران ہوں", lang:"ur", body:"کانٹ اور ہیگل سمجھنے والے لڑکے کو\nتمہاری آنکھیں الجھا دیتی ہیں\nمنطق میں مہارت رکھنے والا لڑکا\nتمہاری سادہ باتوں سے ہار جاتا ہے\nحیرت ہے\nعدمیت کا قائل لڑکا\nتمہاری محبت پر ایمان لے آیا ہے"},
  {id:"p19", title:"تیرا نام اس دل سے", lang:"ur", body:"تیرا نام اس دل سے جو مٹانے میں لگے ہیں\nکتنے احمق ہیں جو ساتھ چھڑانے میں لگے ہیں\nمیں کہ کبھی کوئی خواب نہ دیکھنے والا لڑکا\nتیرے نین ہیں کہ خواب دکھانے میں لگے ہیں\nچند لوگ ہیں جو فہم و ادراک بانٹ رہے ہیں\nکچھ لوگ ہیں جو فقط نام بنانے میں لگے ہیں"},
  {id:"p20", title:"خدا سے معذرت کے ساتھ", lang:"ur", body:"یار خدا\nدکھ ہے\nدکھ سے بھی زیادہ خوف ہے\nبچوں کی اٹھتی لاشوں کا خوف\nخون کی بہتی ندیوں کا خوف\nیار خدا معذرت\nمگر نجانے کیوں\nبچوں کو تیرے گھر بھیجتے ہوئے ڈر لگنے لگا ہے\nتُو اگر لَم یَلِد نہ ہوتا\nتو میرا خوف ضرور جان جاتا\nیار خدا معذرت\nتیرا گھر محفوظ نہیں رہا"},
  {id:"p21", title:"فلک زادی", lang:"ur", body:"پھولوں کا کھلنا\nتمہاری ذات سے ہے\nاور تمہاری اداسی\nتتلیوں کی موت ہے\nمسکرایا کرو\nکہ نیچر کی بقا اسی میں ہے"},
  {id:"p22", title:"مسکراتے ہوئے بھی پیارا نہیں دِکھ سکتا", lang:"ur", body:"مسکراتے ہوئے بھی پیارا نہیں دِکھ سکتا میں\nتیرے ساتھ کوئی تصویر نہیں ہے میری\nسمجھتا کب ہے، بالکل جزا کے جیسا ہے\nوہ شخص بیماریوں میں دوا کے جیسا ہے\nگھرا ہو کوئی مصائب میں اور ایسے میں\nمشکل میں کام آئے، اس دعا کے جیسا ہے"},
  {id:"p23", title:"But Man", lang:"en", body:"But man\nThose pills\nThe antidepressants\nThey were never the solution"},
  {id:"p24", title:"But I Must Say", lang:"en", body:"But i must say\nA day, obviously there will be a day\nI can see you\nRealizing all the vibes\nA lost poet had for you\nSee you\nCraving for the things\nWhen they become\nA big nothing"},
  {id:"p25", title:"تم", lang:"ur", body:"جو اس سیارے کی سب سے خوبصورت لڑکی ہو\nرو رہی ہو\nتم\nجو ایک شاعر کی محبت ہو\nرو رہی ہو\nتمہارے رونے پر\nالم سے سارے سیارے مر جائیں\nجو بھی خوش ہیں وہ لوگ مر جائیں"},
  {id:"p26", title:"Night, My Friend", lang:"en", body:"Night; My friend! Is long\nAnd deep\nEven deeper without pills\nHas stories\nTo tell no one\nBut to whisper to itself\nIn a manner silent\nLunatic I will be\nBy keeping it just to me\nIf it lasts little more\nBut how calm it becomes soon\nWhen I last no more"},
  {id:"p27", title:"بغیر پروا کئے", lang:"ur", body:"ماہ و سال کی\nمیں چاہوں گا تمہیں\nکہ ہمارا تعلق\nزمان و مکاں کا کب پابند تھا\nپوری دنیا میں محبت\nبس دو لوگوں نے کی ہے\nونسنٹ نے ستاروں سے\nاور میں نے ستاروں سے زیادہ پیاری لڑکی کو\nستاروں سے زیادہ پیاری لڑکی!"},
  {id:"p28", title:"دیکھو", lang:"ur", body:"میں سمجھ سکتا ہوں\nیہ کوئی بڑی بات نہیں\nجب کوئی آپ کے دل میں نہ رہے\nآپ روابط ختم کر سکتے ہیں\nآپ اس کا جنم دن بھول سکتے ہیں\nاور اسے یکسر بھول سکتے ہیں\nکچھ اس طرح\nجیسے\nاس شخص کا کبھی وجود ہی نہ رہا ہو\nدیکھو یہ کوئی بڑی بات نہیں\nمگر صرف اس کے لیے\nجس نے چاہنا چھوڑ دیا ہے\nاور پیچھے مڑ کر نہیں دیکھا\nہو سکتا ہے یہ سب\nآپ کے لیے کچھ معنی نہ رکھتا ہو\nاور یہ کوئی بڑی بات نہیں\nدوسرے شخص کا کہوں تو\nجو ابھی تک وہیں ہے\nاس کے لیے\nاس سے بڑی کوئی بات نہیں۔"},
  {id:"p29", title:"I Saw Your Picture", lang:"en", body:"I saw your picture\nand the room got quieter\nlike even the dust\ndidn't want to interrupt.\nYou weren't smiling big\njust enough\nto make a man suspicious\nof his own loneliness.\nI kept looking\nlonger than necessary,\nlonger than decent,\nthe way you watch rain\nwhen you know you should leave,\nbut the sky keeps pouring anyway.\nYour eyes\nnot dramatic,\nnot trying,\njust there,\nlike two places\na tired soul could sit down\nwithout paying rent.\nAnd the way your hair\nfell across your cheek\nlike it got bored\nof behaving.\nI wanted to move it aside\nnot gently,\njust honest,\njust enough\nto see you clearer.\nI've seen beauty before,\nit usually shouts,\ndresses loud,\ndemands applause.\nyours didn't.\nyours leaned against the wall\nand waited\nuntil I noticed\nI wasn't breathing right.\nThe photo didn't move.\nbut something did.\nmaybe the night,\nmaybe me,\nmaybe the quiet idea\nthat somewhere\nyou exist\nbeing that beautiful\nwithout even knowing\nsomeone's world\njust tilted a little\nbecause of a picture."},
  {id:"p30", title:"The Man in the Mirror", lang:"en", body:"The man in the mirror\nThere's a man\nIn my mirror\nWho breathes through my lungs\nAnd steals my cigarettes.\nHe wears my face\nLike a borrowed coat,\nToo tight in the shoulders,\nWrinkled at the soul.\nHe looks tired,\nNot from work,\nBut from being.\nYou know?\nFrom carrying\nAll that invisible weight\nLike a duffel bag\nFull of apologies\nAnd poems\nHe never mailed.\nHe mouths things\nI don't say out loud.\nThings like:\n\"Maybe the window wasn't open for air, but for escape.\"\nAnd\n\"You're not lonely—\nyou're just untouched.\"\nSome mornings\nI nod to him,\nWe've made peace,\nMe and that stranger,\nwho used to be\nme.\nBut other days—\nI brush my teeth.\nAnd he doesn't move.\nJust stares.\nLike he's waiting\nFor me\nTo admit\nSomething.\nAnd maybe one day\nI will.\nBut not today.\nToday\nI've got errands."},
  {id:"p31", title:"مرد بنو", lang:"ur", body:"وہ کہتے ہیں\n\"مرد بنو\"\n\"محسوس مت کیا کرو\"\n\"روؤ نہیں\"\n\"زیادہ سوچو نہیں\"\nگویا جذبات کا ایک سوئچ ہے\nجو میں بند کرنا بھول گیا\nجیسے الماری میں کہیں\nایک سرد آواز رکھی ہو\nایک بے حس دل\nجو مجھے اپنی دھڑکن کی جگہ\nاستعمال کرنا چاہیے\nمیں بیٹھا رہتا ہوں\nکسی ویرانے میں\nجہاں سب کچھ محسوس کر سکتا ہوں\nکسی کو دور جاتے ہوئے\nلہجے کی معمولی تبدیلی\nان کا مجھ پر ہنسنا\nمذاق اڑانے کو\nاور میں تین دن آگے جا چکا ہوتا ہوں\nسوچتا ہوا\nکہ اس کا مطلب کیا تھا\nوہ اسے بیماری کہتے ہیں\nزیادہ سوچنا\nجیسے میرا دماغ\nکوئی خراب نل ہو\nجو بند نہیں ہوتا\nوہ اسے جانتے ہیں\nبطور ایک شور کے\nوہ کہتے ہیں\n\"مرد بنو\"\nاور نصیحت تھماتے ہیں\nاس طرح\nجیسے سستے سگریٹس\nبغیر مانگے\n\"ہمت سے کھڑے ہو\"\n\"لہجہ سخت رکھو\"\n\"پرواہ نہیں کرو\"\nان کے نزدیک\nیہ اتنا ہی آسان ہے\nجیسے\nگیلری سے کچھ مٹا دینا\nیہ کہتے ہوئے\nان کو احساس نہیں رہتا\nیہ میرے لیے\nایسا ہی ہے جیسے\nاپنے اعصابی نظام کا\nآدھا حصہ کاٹ دینا ہو\nفقط اس لیے\nکہ آرام سے رہ سکیں\nنصیحت کرنے والے اور میں\nہم میں سے کچھ\nپتھر رہنے کے لیے نہیں بنے\nبنے ہیں\nمحسوس کرنے کے لیے\nبے وجہ جاگنے کے لیے\nایک لفظ کو بار بار دہرانے کے لیے\nبنے ہیں\nمسکراہٹ کے پیچھے کی لرزش کے لیے\nاس کا انتظار کرنے کے لیے\nجس نے کبھی نہیں آنا\nاگر یہ مرد بننا نہیں\nتو ٹھیک ہے\nمیں وہ رہنا چاہوں گا\nجو میں ہوں\nایک نرم سا جانور\nاونچی آواز والے ذہن کے ساتھ\nسخت دنیا میں چلتا ہوا\nکوشش کرتا ہوا\nآخر میں\nتمہیں بتاتا ہوا\nہم میں سے کچھ کے لیے\nیہی بہت کچھ ہے\nاس ملبے سے تنگ آ کر\nخودکشی نہیں کرتے\nاور زندہ رہنے کی\nایکٹنگ جاری رکھتے ہیں"},
  {id:"p32", title:"اے سراپا محبت", lang:"ur", body:"تمہیں لگتا ہے\nمحبت سے دور بھاگنا\nتمہیں اس سے فاصلہ مہیا کر دے گا\nپیکرِ عشق آپ\nآپ کی رائے کا یکسر احترام\nاس بندہ ناچیز کو دیجئے\nاختلاف کی جسارت\nتاکہ وہ تمہیں بتا سکے\nمحبت سے بھاگنا\nبزدلی ہے\nاور\nخدا کی اس نعمت کا انکار\nجس کے مقابل\nدو جہانوں میں کچھ نہیں\nمحبت تم ہو\nمحبت میں ہوں\nسو! کشادہ کرو\nاپنے دل کے ساتھ\nاپنے بازوؤں کو\nتاکہ یہ سمیٹ لیں مکمل وجود\nآؤ محبت کریں\nآؤ پہلے سے بڑھ کر محبت کریں"},
  {id:"p33", title:"میں نے یادوں کے سامان کو", lang:"ur", body:"ایسے باندھا\nجیسے کوئی آدمی\nبار بار سوٹ کیس کھولتا ہو\nیہ دیکھنے کے لیے\nکہ کہیں وہ\nکوئی ایسی چیز تو نہیں بھول گیا\nجو کبھی تھی ہی نہیں\nاوپر پنکھا\nآہستہ گھوم رہا تھا\nرہنے کی وجوہات گنتا ہوا\nپھر جانے کی وجوہات گنتا ہوا\nپھر گنتی بھول جاتا\nمیری طرح\nباہر ایک بس چیختی ہے\nصبح کے دھندلکے میں\nجیسے روانہ ہونا\nکوئی مرض ہو\nلاعلاج\nاور سچ کہوں تو\nاسے ٹھیک لگتا ہے\nمیں سوچتا رہتا ہوں\nاس آخری الوداع کے بارے میں\nجو ابھی میں نے کہا ہی نہیں تھا\nاسے بار بار سوچتا رہا\nیہاں تک کہ الفاظ\nذہن میں درد کرنے لگے\nشاید میں کہوں\nمیں لکھوں گا\nشاید میں کہوں\nیہ مستقل نہیں\nشاید میں کچھ نہ کہوں\nاور خاموشی کو\nجھوٹ بولنے دوں\nزیادہ سوچنا ایک کرسی ہے\nجو ٹانگیں بڑھاتی رہتی ہے\nیہاں تک کہ تم بیٹھو\nاور گر جاؤ\nکمرہ چھوٹا لگنے لگا\nاب جب میں نے\nاسے چھوڑنے کا فیصلہ کیا\nجیسے اسے معلوم ہو\nمیں واپس گھسٹ آؤں گا\nجب دنیا\nبہت شور مچائے گی\nناقابلِ برداشت ہو جائے گی\nاور ایسا سوچتے ہوئے\nکمرہ مجھ پر ہنس رہا تھا\nمیں نے رستے کا تصور کیا\nلمبا اور ختم نہ ہونے والا\nپھر اسے تصور کیا\nفوراً ختم ہوتا ہوا\nایک بند دروازے پر\nجہاں میرا نام غلط لکھا ہو\nزندہ رہنا\nبس سانس لیتے رہنا ہے\nمگر زیادہ شور کے ساتھ\nزیادہ حرکت کے ساتھ\nاور وہی\nبھاری سر\nمیں بستر کے کنارے بیٹھا\nجوتے پہنے\nپھر اتارے\nپھر دوبارہ پہنے\nسورج رسنے لگا\nپردے کے کنارے سے\nوقت کی طرح\nجو وضاحت کا\nانتظار نہیں کرتا\nباہر والی بس\nمیرے بغیر چلی گئی\nمیں نے خود سے کہا\nایک اور آ جائے گی\nمیں نے خود سے\nبار بار ایسا کہا\nدروازہ\nکھلا رہا\nایک منہ کی طرح\nجو بھول گیا ہو\nوہ کیا کہنا چاہتا تھا\nاور میں وہیں بیٹھا رہا\nآدھا جا چکا\nآدھا رکا ہوا\nصبح کو دیکھتا ہوا\nجو کبھی آنے والی نہیں ہے"},
  {id:"p34", title:"واپس جانا چاہتا ہوں", lang:"ur", body:"اس رات\nجب پہلی بار ملے\nاندیشہ ہجر نہیں\nدوری کا خیال نہیں\nحقیقت سے آگاہ نہیں\nتو میرا ہو نہیں سکتا\nواپس جانا چاہتا ہوں\nاس رات"},
  {id:"p35", title:"اے نانِ تمنا", lang:"ur", body:"اگر موسم ہمارے خلاف ہو جائیں،\nاگر فاصلے ہمارے درمیان دیواریں کھڑی کر دیں،\nاگر دنیا ہماری داستانِ محبت کو بھلا دے،\nتب بھی میرا دل وہیں موجود رہے گا\nجہاں پہلی بار تمہارا نام دھڑکا تھا۔\nمیں تم سے محبت کروں گا\nپھولوں کے مرجھا جانے تک نہیں،\nبلکہ ان کی خوشبو کے آخری سراغ تک۔\nاور جب عمر کی شام اتر آئے گی،\nجب میری آواز تھک جائے گی،\nتب\nمیرے لبوں کی آخری دعا\nتمہارا نام ہو گا\nمیں تمہیں کسی لمحے کے لیے نہیں چاہتا،\nکسی موسم کے لیے نہیں چاہتا،\nنہ جوانی کے چند مختصر برسوں کے لیے۔\nاے میرے محبوب!\nمیں تمہیں ڈھونڈتا ہوں\nجیسے چاند رات کو\nجیسے سمندر اپنے ساحل کو،\nجیسے دعا اپنے قبول ہونے کے انتظار کو۔\nلہٰذا زمانہ جو چاہے فیصلہ لکھ دے،\nوقت چاہے میرے وجود کے تمام نشان مٹا دے۔\nمگر یہ ایک حقیقت کبھی نہیں بدلے گی:\nکہ میری آخری سانس تک،\nمیرے دل کی آخری دھڑکن تک،\nمیری محبت تمہاری امانت رہے گی۔\nاور جب میں اس دنیا سے رخصت ہو جاؤں گا،\nتب بھی میری روح کے خاموش دریچوں میں\nتمہارا نام چراغ کی طرح جلتا رہے گا۔"},
];

const REASONS = [
  "Because your smile is the first thing my mind reaches for on a hard day.",
  "Because I could listen to you say nothing at all and still feel like the luckiest man alive.",
  "Because when you kiss me in a voice note, it undoes me every single time.",
  "Because you make forever sound like a promise I actually want to keep.",
  "Because your laugh has a way of rearranging my whole mood.",
  "Because you listen like what I'm saying actually matters to you.",
  "Because you're patient with me even when I don't deserve it.",
  "Because your voice is the calmest place I know.",
  "Because you make ordinary days feel worth showing up for.",
  "Because loving you has never once felt complicated.",
  "Because you smile with your whole face, not just your mouth.",
  "Because you never make me feel like too much.",
  "Because you're honest with me even when it's easier not to be.",
  "Because your presence makes noisy rooms feel quiet.",
  "Because you remember the small things I mention once.",
  "Because you make me want to be a better version of myself, gently, without ever demanding it.",
  "Because you say my name like it means something to you.",
  "Because your kindness isn't rare — it's just who you are.",
  "Because you make me believe in forever, and I never used to.",
  "Because your voice notes have become the sound I miss most when you're quiet.",
  "Because you never needed to try hard to be enough for me — you just are.",
  "Because you're the softest kind of strong.",
  "Because you make me laugh at the exact moment I need it most.",
  "Because you never let a hard day turn into a hard week between us.",
  "Because I trust you with the parts of me no one else gets to see.",
  "Because your happiness has quietly become one of my main goals in life.",
  "Because you make waiting for you feel worth it every time.",
  "Because you never once made my feelings feel like too much to hold.",
  "Because you ask how I am and actually wait for the answer.",
  "Because you're the calm after every storm I've been through.",
  "Because you still make my heart do something ridiculous when you say good morning.",
  "Because your smile has a way of making my worries feel smaller.",
  "Because you never gave up on getting to know the real me.",
  "Because you make silence between us feel comfortable instead of empty.",
  "Because you're gentle with people, even when they don't deserve it.",
  "Because I never have to perform for you — I can just be tired, or quiet, or ordinary.",
  "Because you make me want to build something permanent with you.",
  "Because your voice saying “I love you” undoes every bad thought in my head.",
  "Because you never made love feel like something to be earned.",
  "Because you're the first person I want to tell things to, good or bad.",
  "Because being with you feels like coming home, even in places I've never been.",
  "Because you make me want to plan a future instead of just getting through today.",
  "Because your smile is proof that good things still happen to me.",
  "Because you never once made me feel unchosen.",
  "Because you're the reason I believe marriage could actually be beautiful.",
  "Because you make ordinary conversations feel like something to look forward to.",
  "Because your voice notes feel like you're in the room with me.",
  "Because you never let my bad days turn into bad versions of me.",
  "Because you make me want to say forever and actually mean it.",
  "Because your care for me never once felt conditional.",
  "Because you smile at me like I'm still worth smiling at, every single day.",
  "Because you make the idea of “us” feel like the safest plan I've ever made.",
  "Because you never rush me, even when I need time to find my words.",
  "Because you're the softest landing after every hard thing I've carried.",
  "Because your voice is the last thing I want to hear before I sleep.",
  "Because you make me feel wanted without ever having to ask.",
  "Because you never let me feel alone in a room full of people.",
  "Because your patience with me feels like a kind of love I didn't know existed.",
  "Because you make me want to keep choosing you, over and over, without getting tired of it.",
  "Because you smile like you mean it, and I've learned to trust that.",
  "Because you never once made my love for you feel like too much responsibility.",
  "Because you make me want to grow old doing ordinary things with you.",
  "Because your laugh is the best sound in any room you're in.",
  "Because you never made me feel like I had to hide the softer parts of myself.",
  "Because you make eternity sound like a reasonable request, not a fantasy.",
  "Because your voice notes carry a kind of warmth text could never hold.",
  "Because you're the first “good morning” and the last “good night” I want, every day.",
  "Because you never once made me doubt where I stood with you.",
  "Because you make me want to be someone worth marrying.",
  "Because your smile has become the measure I use for a good day.",
  "Because you never let my anxious thoughts win, even when they're loud.",
  "Because you make me feel safe enough to be completely honest.",
  "Because you're proof that some people really are worth waiting your whole life for.",
  "Because your voice, even tired, still sounds like home to me.",
  "Because you never made “I love you” feel like a routine — it still feels new every time.",
  "Because you make me want a lifetime, not just a moment.",
  "Because your smile is the reason I keep a phone full of your voice notes.",
  "Because you never once let me feel like a burden.",
  "Because you make quiet nights with you feel like the fullest kind of happiness.",
  "Because your love feels like something built to last, not something passing through.",
  "Because you never gave up on us, even when things were hard to navigate.",
  "Because you make me want to say your name to everyone who asks who I love.",
  "Because your smile when you're truly happy is the most beautiful thing I know.",
  "Because you never let me feel like loving you was a risk not worth taking.",
  "Because you make me want to build a whole life, not just get through this one.",
  "Because your voice notes ending in a kiss have become my favorite part of any day.",
  "Because you never once made me feel like settling.",
  "Because you make forever feel less like a big word and more like an easy decision.",
  "Because your kindness toward me never runs out, even on your hardest days.",
  "Because you make me believe I finally found the person I stop looking for anyone else with.",
  "Because your smile is the one thing I never want to stop causing.",
  "Because you never made loving you complicated — you just made it real.",
  "Because you make me want eternity, not because it sounds romantic, but because a lifetime with you still won't feel like enough.",
  "Because you're the last “I love you” I ever want to say for the first time.",
  "Because you make marriage sound less like a milestone and more like coming home permanently.",
  "Because your smile has quietly become my favorite reason to keep going.",
  "Because I love you — simply, completely, and without needing a better reason than that.",
  "Because you make me want to whisper “forever” and mean every letter of it.",
  "Because even on your tired days, your smile still finds its way to me.",
  "Because loving you feels less like a choice and more like the truest thing about me.",
];

const WISHES = [
  {"title": "For your smile", "text": "May you always have a real reason to smile, and may I always get to be one of them."},
  {"title": "For your peace", "text": "May your heart stay light, your mind stay calm, and your sleep stay easy."},
  {"title": "For your dreams", "text": "May every dream you've quietly held onto find its way into your hands."},
  {"title": "For your health", "text": "May you be protected from every illness, every ache, every hard season of the body."},
  {"title": "For your family", "text": "May the people who raised you get to see how loved you are, and be proud of who you've become."},
  {"title": "For your work", "text": "May your efforts be seen, your patience be rewarded, and your success come without struggle."},
  {"title": "For your heart", "text": "May no sadness ever sit too long in a heart as good as yours."},
  {"title": "For us", "text": "May whatever we're building together be given the time it needs to become forever."},
  {"title": "For your worries", "text": "May every worry that keeps you up at night find its answer sooner than you expect."},
  {"title": "For your soul", "text": "May you always know, without doubt, exactly how deeply you are loved."},
  {"title": "For whatever comes next", "text": "Wherever life takes you, and whoever you build it with, I hope it's someone who deserves the way you love. You deserve nothing less than everything."},
  {"title": "For your happiness", "text": "If our paths carry us apart, I hope you're happy anyway — genuinely, fully, without me having to be part of it for that to be true."},
  {"title": "For the years ahead", "text": "May every year ahead of you be softer than the last — more laughter, less waiting, and a home that feels like peace."},
  {"title": "From wherever I end up", "text": "No matter the distance between us, know this stays true: I wanted good for you before I wanted anything for myself."},
];

const LOVE_LETTER = "I don't think I've ever told you enough — so let me try here, where it can't get lost in a busy day. I love you. I love your smile more than I know how to explain; it has a way of undoing every hard thing in my head the moment I see it. I love hearing your voice, and I love it even more when a voice note ends with you kissing me through it — small thing, but it stays with me all day, every time. I want to be with you for eternity. Not as a phrase, not as something people just say — I mean it plainly and completely. Whatever we build from here, I want to build it with you, for good. So smile always, my love — for you, and a little bit for me too, because it's the best thing I know.";
const DAILY_NOTES = [
  "A reminder, in case today needed one: I love you.",
  "Your smile is still the best part of my day, every day.",
  "I was thinking about your voice notes again. You know the ones.",
  "Just checking in — have you smiled today? You should. It suits you.",
  "Forever is a big word. I still mean it, every time I say it to you.",
  "New poem added to your book. It's for you, like all of them are.",
  "A small note: I'm still choosing you today. And tomorrow.",
  "Whatever kind of day you're having, I hope it ends with you smiling."
];


/* =========================================================================
   For Ain — a private tribute site
   Everything is saved with localStorage per device/browser. No backend,
   no login — this opens straight into the site.
   ========================================================================= */

let SETTINGS = { accent: 'gold' };

/* ---------------------------- storage helpers --------------------------- */
/* Personal/per-device stuff (theme, favorites) stays in localStorage.
   Shared stuff (thoughts, notifications) is synced through Firestore
   below so both of you see the same thing on any device. */
function sGet(key){
  try{ const raw = localStorage.getItem('ain_'+key); return Promise.resolve(raw ? JSON.parse(raw) : null); }
  catch(e){ return Promise.resolve(null); }
}
function sSet(key, value){
  try{ localStorage.setItem('ain_'+key, JSON.stringify(value)); return Promise.resolve(true); }
  catch(e){ console.error('storage set failed', key, e); return Promise.resolve(false); }
}

/* -------------------------- cloud sync (Firestore) ------------------------ */
/* 1. Create a free project at console.firebase.google.com
   2. Build > Firestore Database > Create database
   3. Project settings > your apps > web app (</>) > copy the config below
   4. Paste your real values in place of the placeholders here */
const firebaseConfig = {
  apiKey: "AIzaSyDmqac9ANWJwtlZrKz85d-3fVoD_rVBwpY",
  authDomain: "loveain-699c4.firebaseapp.com",
  projectId: "loveain-699c4",
  storageBucket: "loveain-699c4.firebasestorage.app",
  messagingSenderId: "959492421757",
  appId: "1:959492421757:web:a16b1bce15d82ed9b19914",
  measurementId: "G-GK663QCE7G"
};
let db = null;
let sharedDocRef = null;
try{
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  sharedDocRef = db.collection('ain_site').doc('shared');
}catch(e){
  console.error('Firebase init failed — check firebaseConfig in app.js', e);
  setTimeout(()=>{ try{ toast('Firebase init failed: ' + (e && e.message ? e.message : e)); }catch(_){} }, 500);
}

function withTimeout(promise, ms){
  return Promise.race([
    promise,
    new Promise((_,reject)=> setTimeout(()=>reject(new Error('Timed out — check your internet connection')), ms || 10000))
  ]);
}
async function cGet(key){
  if(!sharedDocRef){ toast('Not connected to database'); return null; }
  try{
    const snap = await withTimeout(sharedDocRef.get());
    const data = snap.exists ? snap.data() : {};
    return data[key] ?? null;
  }catch(e){ toast('Load failed: ' + (e && e.message ? e.message : e)); return null; }
}
async function cSet(key, value){
  if(!sharedDocRef){ toast('Not connected to database'); return false; }
  try{ await withTimeout(sharedDocRef.set({ [key]: value }, { merge: true })); return true; }
  catch(e){ toast('Save failed: ' + (e && e.message ? e.message : e)); return false; }
}
/* -------------------------- push notifications (OneSignal) ---------------
   1. Create a free account at onesignal.com
   2. New App/Website > Web Push > enter your site URL (https://loveyouain.vercel.app)
   3. Use the "Typical Site" integration, and when it asks about a service
      worker, choose "I already have a service worker" and point it at
      the existing sw.js at the site root (that's this project's sw.js —
      OneSignal's script gets merged into it, see the importScripts
      line at the top of sw.js).
   4. Copy the App ID it gives you and paste it below. */
const ONESIGNAL_APP_ID = "08c8cd1e-dce0-47cd-9719-5e7b39c02dda";

let deviceWho = null;
async function registerPush(who){
  if(!who || !ONESIGNAL_APP_ID || ONESIGNAL_APP_ID.startsWith('PASTE_')) return;
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal){
    try{
      await OneSignal.login(who);
      await OneSignal.User.addTag('who', who);
      await OneSignal.Notifications.requestPermission();
    }catch(e){ console.error('push registration failed', e); }
  });
}
function initWhoAmI(){
  const modal = document.getElementById('whoAmIModal');
  document.querySelectorAll('#whoAmIModal [data-whoami]').forEach(btn=>{
    btn.onclick = async ()=>{
      deviceWho = btn.dataset.whoami;
      await sSet('device_who', deviceWho);
      modal.classList.remove('open');
      registerPush(deviceWho);
      preselectWhoChip();
    };
  });
}
function preselectWhoChip(){
  if(!deviceWho) return;
  const picker = document.getElementById('whoPicker');
  const chip = picker.querySelector(`[data-who="${deviceWho}"]`);
  if(chip){
    picker.querySelectorAll('.who-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    selectedWho = deviceWho;
  }
}
async function initDeviceIdentity(){
  deviceWho = await sGet('device_who');
  if(deviceWho){
    registerPush(deviceWho);
    preselectWhoChip();
  } else {
    document.getElementById('whoAmIModal').classList.add('open');
  }
}
function escapeHtml(s){ const d=document.createElement('div'); d.textContent = s||''; return d.innerHTML; }

function toast(msg){
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast glass';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .4s'; setTimeout(()=>el.remove(),400); }, 3600);
}

/* ------------------------------- particles -------------------------------- */
function initParticles(){
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let w,h, ambient=[], bursts=[];
  function resize(){ w=canvas.width=innerWidth; h=canvas.height=innerHeight; }
  resize(); addEventListener('resize', resize);

  const glyphs = ['♥','✦','·'];
  function freshAmbient(){
    return {
      x: Math.random()*w, y: h+30,
      s: 10+Math.random()*16, vy: 0.18+Math.random()*0.4,
      vx: (Math.random()-0.5)*0.3,
      glyph: glyphs[Math.floor(Math.random()*glyphs.length)],
      op: 0.10+Math.random()*0.24,
      sway: Math.random()*Math.PI*2
    };
  }
  for(let i=0;i<34;i++){ const p = freshAmbient(); p.y = Math.random()*h; ambient.push(p); }

  function spawnBurst(x,y){
    const n = 7 + Math.floor(Math.random()*6);
    for(let i=0;i<n;i++){
      const ang = Math.random()*Math.PI*2;
      const speed = 0.8 + Math.random()*2.4;
      bursts.push({
        x, y, vx: Math.cos(ang)*speed, vy: Math.sin(ang)*speed - 1.4,
        life: 1, decay: 0.011+Math.random()*0.014,
        s: 9+Math.random()*13
      });
    }
  }
  document.addEventListener('click', (e)=> spawnBurst(e.clientX, e.clientY));
  document.addEventListener('touchstart', (e)=>{
    if(e.touches && e.touches[0]) spawnBurst(e.touches[0].clientX, e.touches[0].clientY);
  }, {passive:true});

  let t = 0;
  function tick(){
    t += 0.02;
    ctx.clearRect(0,0,w,h);
    ctx.textBaseline='middle'; ctx.textAlign='center';

    ambient.forEach(p=>{
      p.y -= p.vy; p.x += p.vx + Math.sin(t+p.sway)*0.15;
      if(p.y < -20){ Object.assign(p, freshAmbient()); p.y = h+20; }
      ctx.save();
      ctx.globalAlpha = p.op;
      ctx.fillStyle = '#e6d3a3';
      ctx.font = p.s+'px serif';
      ctx.fillText(p.glyph, p.x, p.y);
      ctx.restore();
    });

    bursts.forEach(p=>{
      p.x += p.vx; p.y += p.vy; p.vy += 0.035; p.life -= p.decay;
      ctx.save();
      ctx.globalAlpha = Math.max(p.life,0);
      ctx.fillStyle = '#e0879a';
      ctx.font = p.s+'px serif';
      ctx.fillText('♥', p.x, p.y);
      ctx.restore();
    });
    bursts = bursts.filter(p=>p.life>0);

    requestAnimationFrame(tick);
  }
  tick();
}

/* --------------------------------- theme ---------------------------------- */
const ACCENTS = {
  gold:   {gold:'#c9a24b', soft:'#e6d3a3'},
  rose:   {gold:'#c97b8a', soft:'#f0c3cd'},
  amber:  {gold:'#d99a3f', soft:'#f0cf8f'},
  jade:   {gold:'#5f9e83', soft:'#a9d8c3'},
};
function applyAccent(name){
  const a = ACCENTS[name] || ACCENTS.gold;
  document.documentElement.style.setProperty('--gold', a.gold);
  document.documentElement.style.setProperty('--gold-soft', a.soft);
}
async function initTheme(){
  const saved = await sGet('theme_mode');
  const mode = saved || 'dark';
  document.body.setAttribute('data-theme', mode);
  document.getElementById('themeToggle').checked = (mode==='light');
  document.getElementById('themeBtn').textContent = mode==='light' ? '☀️' : '🌙';
  document.getElementById('themeBtn').onclick = async ()=>{
    const cur = document.body.getAttribute('data-theme');
    const next = cur==='light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', next);
    document.getElementById('themeToggle').checked = (next==='light');
    document.getElementById('themeBtn').textContent = next==='light' ? '☀️' : '🌙';
    await sSet('theme_mode', next);
  };
  document.getElementById('themeToggle').onchange = ()=> document.getElementById('themeBtn').click();
}
async function initSettings(){
  SETTINGS = (await sGet('settings')) || {accent:'gold'};
  applyAccent(SETTINGS.accent);
  const sw = document.getElementById('swatches');
  sw.innerHTML = Object.keys(ACCENTS).map(k=>`<div class="swatch ${SETTINGS.accent===k?'active':''}" data-accent="${k}" style="background:${ACCENTS[k].gold}"></div>`).join('');
  sw.querySelectorAll('.swatch').forEach(s=>{
    s.onclick = async ()=>{
      SETTINGS.accent = s.dataset.accent;
      applyAccent(SETTINGS.accent);
      sw.querySelectorAll('.swatch').forEach(x=>x.classList.remove('active'));
      s.classList.add('active');
      await sSet('settings', SETTINGS);
    };
  });
}

/* --------------------------------- nav / router --------------------------------- */
const NAV_ITEMS = [
  {id:'home', label:'Home'},
  {id:'poems', label:'Poems'},
  {id:'wishes', label:'Good Wishes'},
  {id:'reasons', label:'100 Reasons'},
  {id:'thoughts', label:'Our Thoughts'},
  {id:'settings', label:'Settings'},
];
function initNav(){
  const wrap = document.getElementById('navLinks');
  wrap.innerHTML = NAV_ITEMS.map(n=>`<a href="#${n.id}" data-nav="${n.id}">${n.label}</a>`).join('');
  wrap.querySelectorAll('a').forEach(a=>{
    a.onclick = ()=>{
      wrap.querySelectorAll('a').forEach(x=>x.classList.remove('active'));
      a.classList.add('active');
    };
  });
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        wrap.querySelectorAll('a').forEach(x=>x.classList.remove('active'));
        wrap.querySelector(`a[data-nav="${en.target.id}"]`)?.classList.add('active');
      }
    });
  }, {threshold:0.4});
  document.querySelectorAll('section.page').forEach(s=>io.observe(s));
}

/* --------------------------------- modals --------------------------------- */
function initModals(){
  document.querySelectorAll('.modal-close').forEach(b=>{
    b.onclick = ()=> document.getElementById(b.dataset.close).classList.remove('open');
  });
  document.querySelectorAll('.modal-overlay').forEach(m=>{
    m.addEventListener('click', (e)=>{ if(e.target===m) m.classList.remove('open'); });
  });
}

/* ===================================================================
   LOVE LETTER
   =================================================================== */
function renderLoveLetter(){
  document.getElementById('loveLetterText').textContent = LOVE_LETTER;
}

/* ===================================================================
   POEMS — animated page-turn book (all poems included)
   =================================================================== */
let poemState = { list: SEED_POEMS, idx:0, filtered:null };

async function getFavorites(){ return (await sGet('poem_favorites')) || []; }
async function toggleFavorite(id){
  const favs = await getFavorites();
  const i = favs.indexOf(id);
  if(i>-1) favs.splice(i,1); else favs.push(id);
  await sSet('poem_favorites', favs);
  return favs;
}
function renderBookPage(poem, favIds){
  const isUrdu = poem.lang === 'ur';
  const isFav = favIds.includes(poem.id);
  return `
    <button class="fav-star ${isFav?'active':''}" data-favid="${poem.id}">★</button>
    <h3>${escapeHtml(poem.title)}</h3>
    <div class="poem-body ${isUrdu?'urdu':''}">${escapeHtml(poem.body)}</div>
    <div class="leaf-num">${poemState.idx+1} / ${poemState.list.length}</div>
  `;
}
async function renderBook(){
  const bookEl = document.getElementById('bookEl');
  const favs = await getFavorites();
  const list = poemState.filtered || poemState.list;
  if(!list.length){
    bookEl.innerHTML = '<div class="leaf" style="padding:40px;text-align:center;opacity:.6;">No poems match your search.</div>';
    return;
  }
  if(poemState.idx >= list.length) poemState.idx = list.length-1;
  if(poemState.idx < 0) poemState.idx = 0;
  const poem = list[poemState.idx];
  bookEl.innerHTML = `<div class="leaf glass" id="curPage">${renderBookPage(poem, favs)}</div>`;
  bookEl.querySelector('[data-favid]').onclick = async (e)=>{
    await toggleFavorite(e.target.dataset.favid);
    renderBook();
  };
}
function initPoems(){
  document.getElementById('poemNext').onclick = ()=>{ poemState.idx++; renderBook(); };
  document.getElementById('poemPrev').onclick = ()=>{ poemState.idx--; renderBook(); };
  document.getElementById('poemFav').onclick = async ()=>{
    const list = poemState.filtered || poemState.list;
    const poem = list[poemState.idx];
    if(poem){ await toggleFavorite(poem.id); renderBook(); }
  };
  document.getElementById('poemSearch').oninput = (e)=>{
    const q = e.target.value.trim().toLowerCase();
    poemState.filtered = q ? poemState.list.filter(p=> p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)) : null;
    poemState.idx = 0;
    renderBook();
  };
}

/* ===================================================================
   GOOD WISHES
   =================================================================== */
function renderWishes(){
  document.getElementById('wishesGrid').innerHTML = WISHES.map(w=>`
    <div class="card glass">
      <h3>${escapeHtml(w.title)}</h3>
      <p style="margin:0;">${escapeHtml(w.text)}</p>
    </div>
  `).join('');
}

/* ===================================================================
   100 REASONS
   =================================================================== */
let reasonIdx = 0;
function renderReason(){
  if(reasonIdx >= REASONS.length) reasonIdx = REASONS.length-1;
  if(reasonIdx < 0) reasonIdx = 0;
  document.getElementById('reasonCount').textContent = `Reason ${reasonIdx+1} of ${REASONS.length}`;
  document.getElementById('reasonCard').textContent = REASONS[reasonIdx];
}
function initReasons(){
  document.getElementById('reasonNext').onclick = ()=>{ reasonIdx++; renderReason(); };
  document.getElementById('reasonPrev').onclick = ()=>{ reasonIdx--; renderReason(); };
}

/* ===================================================================
   OUR THOUGHTS — two-way sharing
   =================================================================== */
let selectedWho = null;
let expandedComments = new Set();
async function getThoughts(){ return (await cGet('thoughts')) || []; }
async function saveThoughts(list){ await cSet('thoughts', list); }

function thoughtCard(t){
  const reacts = t.reacts || {heart:0, smile:0};
  const comments = t.comments || [];
  const isOpen = expandedComments.has(t.id);
  return `<div class="thought-post glass" data-id="${t.id}">
    <span class="ts">${new Date(t.ts).toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})}</span>
    <div class="who">${escapeHtml(t.who)}</div>
    <div class="msg">${escapeHtml(t.msg)}</div>
    <div class="reacts">
      <button data-react="heart" data-id="${t.id}">❤️ ${reacts.heart||0}</button>
      <button data-react="smile" data-id="${t.id}">😍 ${reacts.smile||0}</button>
      <button data-comment-toggle="${t.id}">💬 ${comments.length}</button>
      <button data-del="${t.id}" style="margin-left:auto;">delete</button>
    </div>
    <div class="comments-panel" data-panel="${t.id}" style="display:${isOpen?'block':'none'};">
      ${comments.map(c=>`<div class="comment-item"><span class="c-who">${escapeHtml(c.who)}</span><span class="c-text">${escapeHtml(c.text)}</span></div>`).join('') || '<p class="comment-empty">No comments yet.</p>'}
      <div class="comment-compose">
        <input class="field" data-cinput="${t.id}" placeholder="Write a comment...">
        <button class="btn small" data-csend="${t.id}">Reply</button>
      </div>
    </div>
  </div>`;
}
async function renderThoughts(){
  const list = (await getThoughts()).slice().sort((a,b)=> b.ts-a.ts);
  const host = document.getElementById('thoughtsList');
  host.innerHTML = list.map(thoughtCard).join('') || '<p style="opacity:.6; text-align:center;">Nothing here yet — say something.</p>';
  host.querySelectorAll('[data-react]').forEach(b=>{
    b.onclick = async ()=>{
      const all = await getThoughts();
      const t = all.find(x=>x.id===b.dataset.id);
      if(!t) return;
      t.reacts = t.reacts || {};
      t.reacts[b.dataset.react] = (t.reacts[b.dataset.react]||0)+1;
      await saveThoughts(all);
      renderThoughts();
      pushNotification(`${deviceWho||'Someone'} reacted ${b.dataset.react==='heart'?'❤️':'😍'} to a thought`, deviceWho);
    };
  });
  host.querySelectorAll('[data-del]').forEach(b=>{
    b.onclick = async ()=>{
      let all = await getThoughts();
      all = all.filter(x=>x.id!==b.dataset.del);
      await saveThoughts(all);
      renderThoughts();
    };
  });
  host.querySelectorAll('[data-comment-toggle]').forEach(b=>{
    b.onclick = ()=>{
      const id = b.dataset.commentToggle;
      if(expandedComments.has(id)) expandedComments.delete(id); else expandedComments.add(id);
      renderThoughts();
    };
  });
  host.querySelectorAll('[data-csend]').forEach(b=>{
    b.onclick = async ()=>{
      const id = b.dataset.csend;
      if(!selectedWho){ toast('Pick who you are first.'); return; }
      const input = host.querySelector(`[data-cinput="${id}"]`);
      const text = input.value.trim();
      if(!text) return;
      const all = await getThoughts();
      const t = all.find(x=>x.id===id);
      if(!t) return;
      t.comments = t.comments || [];
      t.comments.push({id:uid(), who:selectedWho, text, ts:Date.now()});
      expandedComments.add(id);
      await saveThoughts(all);
      await pushNotification(`${selectedWho} commented on a thought`, selectedWho);
      renderThoughts();
    };
  });
  host.querySelectorAll('[data-cinput]').forEach(inp=>{
    inp.onkeydown = (e)=>{
      if(e.key==='Enter'){ e.preventDefault(); host.querySelector(`[data-csend="${inp.dataset.cinput}"]`)?.click(); }
    };
  });
}
function initThoughts(){
  const picker = document.getElementById('whoPicker');
  picker.querySelectorAll('.who-chip').forEach(chip=>{
    chip.onclick = ()=>{
      picker.querySelectorAll('.who-chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      selectedWho = chip.dataset.who;
    };
  });
  document.getElementById('thoughtSend').onclick = async ()=>{
    const input = document.getElementById('thoughtInput');
    const msg = input.value.trim();
    if(!selectedWho){ toast('Pick who you are first.'); return; }
    if(!msg) return;
    const all = await getThoughts();
    all.push({id:uid(), who:selectedWho, msg, ts:Date.now(), reacts:{}, comments:[]});
    await saveThoughts(all);
    await pushNotification(`${selectedWho} shared a thought`, selectedWho);
    input.value='';
    renderThoughts();
  };
}

/* ===================================================================
   NOTIFICATIONS — daily note + activity feed
   =================================================================== */
function dayIndex(){
  const now = new Date();
  const start = new Date(now.getFullYear(),0,0);
  return Math.floor((now-start)/86400000);
}
async function sendPush(text, actorWho){
  try{
    await fetch('/api/notify', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({text, actorWho})
    });
  }catch(e){ console.error('push send failed', e); }
}
async function pushNotification(text, actorWho){
  const all = (await cGet('notifications')) || [];
  all.push({id:uid(), text, ts:Date.now()});
  await cSet('notifications', all.slice(-40));
  refreshNotifBadge();
  sendPush(text, actorWho);
}
async function refreshNotifBadge(){
  const seenDay = await sGet('notif_seen_day');
  const today = new Date().toDateString();
  const badge = document.getElementById('notifBadge');
  const all = (await cGet('notifications')) || [];
  const unseenActivity = (await sGet('notif_unseen_count')) || 0;
  const count = (seenDay===today ? 0 : 1) + unseenActivity;
  if(count>0){ badge.style.display='flex'; badge.textContent = count>9?'9+':count; }
  else badge.style.display='none';
}
function initNotifications(){
  document.getElementById('notifBtn').onclick = async ()=>{
    const dailyNote = DAILY_NOTES[dayIndex() % DAILY_NOTES.length];
    const all = ((await cGet('notifications')) || []).slice().sort((a,b)=>b.ts-a.ts).slice(0,15);
    const items = [{text: `Today's note: ${dailyNote}`, ts: Date.now(), pinned:true}, ...all];
    document.getElementById('notifModalBody').innerHTML = `<h3>Notifications</h3>` +
      items.map(n=>`<div class="notif-item glass"><div class="ts">${new Date(n.ts).toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})}</div><div>${escapeHtml(n.text)}</div></div>`).join('');
    document.getElementById('notifModal').classList.add('open');
    await sSet('notif_seen_day', new Date().toDateString());
    await sSet('notif_unseen_count', 0);
    refreshNotifBadge();
  };
}

/* ===================================================================
   BOOT
   =================================================================== */
async function boot(){
  initParticles();
  await initTheme();
  initNav();
  initModals();

  renderLoveLetter();

  await renderBook();
  initPoems();

  renderWishes();

  renderReason();
  initReasons();

  await renderThoughts();
  initThoughts();
  initWhoAmI();
  await initDeviceIdentity();

  await initSettings();

  refreshNotifBadge();

  /* Live sync: whenever either of you saves a thought or notification
     anywhere, both devices update instantly — no polling needed. */
  if(sharedDocRef){
    sharedDocRef.onSnapshot(()=>{ renderThoughts(); refreshNotifBadge(); });
  } else {
    // Fallback if Firebase isn't configured yet, so it still sort-of works locally.
    setInterval(async ()=>{ await renderThoughts(); refreshNotifBadge(); }, 8000);
  }
}

(async function init(){ await boot(); })();

