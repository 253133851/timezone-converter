// ── 全球城市数据库 ────────────────────────────────────────────────────────────
const ALL_CITIES = [
  // China
  {id:'beijing',     name:'北京',          nameEn:'Beijing',         country:'中国',         flag:'🇨🇳', tz:'Asia/Shanghai',                   accent:'#6c8aff'},
  {id:'shanghai',    name:'上海',          nameEn:'Shanghai',        country:'中国',         flag:'🇨🇳', tz:'Asia/Shanghai',                   accent:'#818cf8'},
  {id:'chongqing',   name:'重庆',          nameEn:'Chongqing',       country:'中国',         flag:'🇨🇳', tz:'Asia/Shanghai',                   accent:'#a78bfa'},
  {id:'guangzhou',   name:'广州',          nameEn:'Guangzhou',       country:'中国',         flag:'🇨🇳', tz:'Asia/Shanghai',                   accent:'#c4b5fd'},
  {id:'shenzhen',    name:'深圳',          nameEn:'Shenzhen',        country:'中国',         flag:'🇨🇳', tz:'Asia/Shanghai',                   accent:'#7c3aed'},
  {id:'hongkong',    name:'香港',          nameEn:'Hong Kong',       country:'中国香港',     flag:'🇭🇰', tz:'Asia/Hong_Kong',                  accent:'#fb7185'},
  {id:'taipei',      name:'台北',          nameEn:'Taipei',          country:'中国台湾',     flag:'🇨🇳', tz:'Asia/Taipei',                     accent:'#38bdf8'},
  {id:'macau',       name:'澳门',          nameEn:'Macau',           country:'中国澳门',     flag:'🇲🇴', tz:'Asia/Macau',                      accent:'#67e8f9'},
  // East Asia
  {id:'tokyo',       name:'东京',          nameEn:'Tokyo',           country:'日本',         flag:'🇯🇵', tz:'Asia/Tokyo',                      accent:'#f87171'},
  {id:'osaka',       name:'大阪',          nameEn:'Osaka',           country:'日本',         flag:'🇯🇵', tz:'Asia/Tokyo',                      accent:'#fca5a5'},
  {id:'sapporo',     name:'札幌',          nameEn:'Sapporo',         country:'日本',         flag:'🇯🇵', tz:'Asia/Tokyo',                      accent:'#fecaca'},
  {id:'seoul',       name:'首尔',          nameEn:'Seoul',           country:'韩国',         flag:'🇰🇷', tz:'Asia/Seoul',                      accent:'#60a5fa'},
  {id:'busan',       name:'釜山',          nameEn:'Busan',           country:'韩国',         flag:'🇰🇷', tz:'Asia/Seoul',                      accent:'#93c5fd'},
  // Southeast Asia
  {id:'singapore',   name:'新加坡',        nameEn:'Singapore',       country:'新加坡',       flag:'🇸🇬', tz:'Asia/Singapore',                  accent:'#f472b6'},
  {id:'bangkok',     name:'曼谷',          nameEn:'Bangkok',         country:'泰国',         flag:'🇹🇭', tz:'Asia/Bangkok',                    accent:'#4ade80'},
  {id:'jakarta',     name:'雅加达',        nameEn:'Jakarta',         country:'印度尼西亚',   flag:'🇮🇩', tz:'Asia/Jakarta',                    accent:'#fb923c'},
  {id:'bali',        name:'巴厘岛',        nameEn:'Bali',            country:'印度尼西亚',   flag:'🇮🇩', tz:'Asia/Makassar',                   accent:'#fdba74'},
  {id:'manila',      name:'马尼拉',        nameEn:'Manila',          country:'菲律宾',       flag:'🇵🇭', tz:'Asia/Manila',                     accent:'#06b6d4'},
  {id:'kualalumpur', name:'吉隆坡',        nameEn:'Kuala Lumpur',    country:'马来西亚',     flag:'🇲🇾', tz:'Asia/Kuala_Lumpur',               accent:'#14b8a6'},
  {id:'yangon',      name:'仰光',          nameEn:'Yangon',          country:'缅甸',         flag:'🇲🇲', tz:'Asia/Rangoon',                    accent:'#84cc16'},
  {id:'hanoi',       name:'河内',          nameEn:'Hanoi',           country:'越南',         flag:'🇻🇳', tz:'Asia/Ho_Chi_Minh',                accent:'#a3e635'},
  {id:'hochiminh',   name:'胡志明市',      nameEn:'Ho Chi Minh City',country:'越南',         flag:'🇻🇳', tz:'Asia/Ho_Chi_Minh',                accent:'#bef264'},
  {id:'phnompenh',   name:'金边',          nameEn:'Phnom Penh',      country:'柬埔寨',       flag:'🇰🇭', tz:'Asia/Phnom_Penh',                 accent:'#4ade80'},
  {id:'vientiane',   name:'万象',          nameEn:'Vientiane',       country:'老挝',         flag:'🇱🇦', tz:'Asia/Vientiane',                  accent:'#86efac'},
  // South Asia
  {id:'mumbai',      name:'孟买',          nameEn:'Mumbai',          country:'印度',         flag:'🇮🇳', tz:'Asia/Kolkata',                    accent:'#f97316'},
  {id:'delhi',       name:'新德里',        nameEn:'New Delhi',       country:'印度',         flag:'🇮🇳', tz:'Asia/Kolkata',                    accent:'#fb923c'},
  {id:'kolkata',     name:'加尔各答',      nameEn:'Kolkata',         country:'印度',         flag:'🇮🇳', tz:'Asia/Kolkata',                    accent:'#fbbf24'},
  {id:'bangalore',   name:'班加罗尔',      nameEn:'Bangalore',       country:'印度',         flag:'🇮🇳', tz:'Asia/Kolkata',                    accent:'#fcd34d'},
  {id:'dhaka',       name:'达卡',          nameEn:'Dhaka',           country:'孟加拉国',     flag:'🇧🇩', tz:'Asia/Dhaka',                      accent:'#22c55e'},
  {id:'karachi',     name:'卡拉奇',        nameEn:'Karachi',         country:'巴基斯坦',     flag:'🇵🇰', tz:'Asia/Karachi',                    accent:'#65a30d'},
  {id:'islamabad',   name:'伊斯兰堡',      nameEn:'Islamabad',       country:'巴基斯坦',     flag:'🇵🇰', tz:'Asia/Karachi',                    accent:'#16a34a'},
  {id:'kathmandu',   name:'加德满都',      nameEn:'Kathmandu',       country:'尼泊尔',       flag:'🇳🇵', tz:'Asia/Kathmandu',                  accent:'#ef4444'},
  {id:'colombo',     name:'科伦坡',        nameEn:'Colombo',         country:'斯里兰卡',     flag:'🇱🇰', tz:'Asia/Colombo',                    accent:'#a3e635'},
  // Central & West Asia
  {id:'tashkent',    name:'塔什干',        nameEn:'Tashkent',        country:'乌兹别克斯坦', flag:'🇺🇿', tz:'Asia/Tashkent',                   accent:'#8b5cf6'},
  {id:'almaty',      name:'阿拉木图',      nameEn:'Almaty',          country:'哈萨克斯坦',   flag:'🇰🇿', tz:'Asia/Almaty',                     accent:'#a78bfa'},
  {id:'ulaanbaatar', name:'乌兰巴托',      nameEn:'Ulaanbaatar',     country:'蒙古',         flag:'🇲🇳', tz:'Asia/Ulaanbaatar',                accent:'#c084fc'},
  {id:'tehran',      name:'德黑兰',        nameEn:'Tehran',          country:'伊朗',         flag:'🇮🇷', tz:'Asia/Tehran',                     accent:'#22d3ee'},
  {id:'dubai',       name:'迪拜',          nameEn:'Dubai',           country:'阿联酋',       flag:'🇦🇪', tz:'Asia/Dubai',                      accent:'#fbbf24'},
  {id:'abudhabi',    name:'阿布扎比',      nameEn:'Abu Dhabi',       country:'阿联酋',       flag:'🇦🇪', tz:'Asia/Dubai',                      accent:'#fde68a'},
  {id:'riyadh',      name:'利雅得',        nameEn:'Riyadh',          country:'沙特阿拉伯',   flag:'🇸🇦', tz:'Asia/Riyadh',                     accent:'#10b981'},
  {id:'jeddah',      name:'吉达',          nameEn:'Jeddah',          country:'沙特阿拉伯',   flag:'🇸🇦', tz:'Asia/Riyadh',                     accent:'#34d399'},
  {id:'baghdad',     name:'巴格达',        nameEn:'Baghdad',         country:'伊拉克',       flag:'🇮🇶', tz:'Asia/Baghdad',                    accent:'#6ee7b7'},
  {id:'kuwait',      name:'科威特城',      nameEn:'Kuwait City',     country:'科威特',       flag:'🇰🇼', tz:'Asia/Kuwait',                     accent:'#2dd4bf'},
  {id:'doha',        name:'多哈',          nameEn:'Doha',            country:'卡塔尔',       flag:'🇶🇦', tz:'Asia/Qatar',                      accent:'#818cf8'},
  {id:'manama',      name:'麦纳麦',        nameEn:'Manama',          country:'巴林',         flag:'🇧🇭', tz:'Asia/Bahrain',                    accent:'#a5f3fc'},
  {id:'muscat',      name:'马斯喀特',      nameEn:'Muscat',          country:'阿曼',         flag:'🇴🇲', tz:'Asia/Muscat',                     accent:'#67e8f9'},
  {id:'jerusalem',   name:'耶路撒冷',      nameEn:'Jerusalem',       country:'以色列',       flag:'🇮🇱', tz:'Asia/Jerusalem',                  accent:'#3b82f6'},
  {id:'telaviv',     name:'特拉维夫',      nameEn:'Tel Aviv',        country:'以色列',       flag:'🇮🇱', tz:'Asia/Jerusalem',                  accent:'#60a5fa'},
  {id:'istanbul',    name:'伊斯坦布尔',    nameEn:'Istanbul',        country:'土耳其',       flag:'🇹🇷', tz:'Europe/Istanbul',                 accent:'#f43f5e'},
  {id:'ankara',      name:'安卡拉',        nameEn:'Ankara',          country:'土耳其',       flag:'🇹🇷', tz:'Europe/Istanbul',                 accent:'#fb7185'},
  {id:'baku',        name:'巴库',          nameEn:'Baku',            country:'阿塞拜疆',     flag:'🇦🇿', tz:'Asia/Baku',                       accent:'#38bdf8'},
  {id:'yerevan',     name:'埃里温',        nameEn:'Yerevan',         country:'亚美尼亚',     flag:'🇦🇲', tz:'Asia/Yerevan',                    accent:'#f87171'},
  {id:'tbilisi',     name:'第比利斯',      nameEn:'Tbilisi',         country:'格鲁吉亚',     flag:'🇬🇪', tz:'Asia/Tbilisi',                    accent:'#fb923c'},
  // Europe
  {id:'london',      name:'伦敦',          nameEn:'London',          country:'英国',         flag:'🇬🇧', tz:'Europe/London',                   accent:'#facc15'},
  {id:'edinburgh',   name:'爱丁堡',        nameEn:'Edinburgh',       country:'英国',         flag:'🇬🇧', tz:'Europe/London',                   accent:'#fde047'},
  {id:'paris',       name:'巴黎',          nameEn:'Paris',           country:'法国',         flag:'🇫🇷', tz:'Europe/Paris',                    accent:'#e879f9'},
  {id:'lyon',        name:'里昂',          nameEn:'Lyon',            country:'法国',         flag:'🇫🇷', tz:'Europe/Paris',                    accent:'#d946ef'},
  {id:'berlin',      name:'柏林',          nameEn:'Berlin',          country:'德国',         flag:'🇩🇪', tz:'Europe/Berlin',                   accent:'#94a3b8'},
  {id:'munich',      name:'慕尼黑',        nameEn:'Munich',          country:'德国',         flag:'🇩🇪', tz:'Europe/Berlin',                   accent:'#cbd5e1'},
  {id:'hamburg',     name:'汉堡',          nameEn:'Hamburg',         country:'德国',         flag:'🇩🇪', tz:'Europe/Berlin',                   accent:'#b0bec5'},
  {id:'rome',        name:'罗马',          nameEn:'Rome',            country:'意大利',       flag:'🇮🇹', tz:'Europe/Rome',                     accent:'#22d3ee'},
  {id:'milan',       name:'米兰',          nameEn:'Milan',           country:'意大利',       flag:'🇮🇹', tz:'Europe/Rome',                     accent:'#67e8f9'},
  {id:'madrid',      name:'马德里',        nameEn:'Madrid',          country:'西班牙',       flag:'🇪🇸', tz:'Europe/Madrid',                   accent:'#f59e0b'},
  {id:'barcelona',   name:'巴塞罗那',      nameEn:'Barcelona',       country:'西班牙',       flag:'🇪🇸', tz:'Europe/Madrid',                   accent:'#fcd34d'},
  {id:'amsterdam',   name:'阿姆斯特丹',    nameEn:'Amsterdam',       country:'荷兰',         flag:'🇳🇱', tz:'Europe/Amsterdam',                accent:'#f97316'},
  {id:'brussels',    name:'布鲁塞尔',      nameEn:'Brussels',        country:'比利时',       flag:'🇧🇪', tz:'Europe/Brussels',                 accent:'#fde047'},
  {id:'vienna',      name:'维也纳',        nameEn:'Vienna',          country:'奥地利',       flag:'🇦🇹', tz:'Europe/Vienna',                   accent:'#c084fc'},
  {id:'zurich',      name:'苏黎世',        nameEn:'Zurich',          country:'瑞士',         flag:'🇨🇭', tz:'Europe/Zurich',                   accent:'#f43f5e'},
  {id:'geneva',      name:'日内瓦',        nameEn:'Geneva',          country:'瑞士',         flag:'🇨🇭', tz:'Europe/Zurich',                   accent:'#fb7185'},
  {id:'stockholm',   name:'斯德哥尔摩',    nameEn:'Stockholm',       country:'瑞典',         flag:'🇸🇪', tz:'Europe/Stockholm',                accent:'#fbbf24'},
  {id:'oslo',        name:'奥斯陆',        nameEn:'Oslo',            country:'挪威',         flag:'🇳🇴', tz:'Europe/Oslo',                     accent:'#ef4444'},
  {id:'copenhagen',  name:'哥本哈根',      nameEn:'Copenhagen',      country:'丹麦',         flag:'🇩🇰', tz:'Europe/Copenhagen',               accent:'#f43f5e'},
  {id:'helsinki',    name:'赫尔辛基',      nameEn:'Helsinki',        country:'芬兰',         flag:'🇫🇮', tz:'Europe/Helsinki',                 accent:'#38bdf8'},
  {id:'warsaw',      name:'华沙',          nameEn:'Warsaw',          country:'波兰',         flag:'🇵🇱', tz:'Europe/Warsaw',                   accent:'#f87171'},
  {id:'krakow',      name:'克拉科夫',      nameEn:'Krakow',          country:'波兰',         flag:'🇵🇱', tz:'Europe/Warsaw',                   accent:'#fca5a5'},
  {id:'athens',      name:'雅典',          nameEn:'Athens',          country:'希腊',         flag:'🇬🇷', tz:'Europe/Athens',                   accent:'#38bdf8'},
  {id:'lisbon',      name:'里斯本',        nameEn:'Lisbon',          country:'葡萄牙',       flag:'🇵🇹', tz:'Europe/Lisbon',                   accent:'#4ade80'},
  {id:'moscow',      name:'莫斯科',        nameEn:'Moscow',          country:'俄罗斯',       flag:'🇷🇺', tz:'Europe/Moscow',                   accent:'#ef4444'},
  {id:'stpetersburg',name:'圣彼得堡',      nameEn:'St. Petersburg',  country:'俄罗斯',       flag:'🇷🇺', tz:'Europe/Moscow',                   accent:'#fca5a5'},
  {id:'prague',      name:'布拉格',        nameEn:'Prague',          country:'捷克',         flag:'🇨🇿', tz:'Europe/Prague',                   accent:'#60a5fa'},
  {id:'budapest',    name:'布达佩斯',      nameEn:'Budapest',        country:'匈牙利',       flag:'🇭🇺', tz:'Europe/Budapest',                 accent:'#fb923c'},
  {id:'bucharest',   name:'布加勒斯特',    nameEn:'Bucharest',       country:'罗马尼亚',     flag:'🇷🇴', tz:'Europe/Bucharest',                accent:'#fbbf24'},
  {id:'kyiv',        name:'基辅',          nameEn:'Kyiv',            country:'乌克兰',       flag:'🇺🇦', tz:'Europe/Kiev',                     accent:'#fde047'},
  {id:'sofia',       name:'索非亚',        nameEn:'Sofia',           country:'保加利亚',     flag:'🇧🇬', tz:'Europe/Sofia',                    accent:'#4ade80'},
  {id:'belgrade',    name:'贝尔格莱德',    nameEn:'Belgrade',        country:'塞尔维亚',     flag:'🇷🇸', tz:'Europe/Belgrade',                 accent:'#f87171'},
  {id:'zagreb',      name:'萨格勒布',      nameEn:'Zagreb',          country:'克罗地亚',     flag:'🇭🇷', tz:'Europe/Zagreb',                   accent:'#fb923c'},
  {id:'dublin',      name:'都柏林',        nameEn:'Dublin',          country:'爱尔兰',       flag:'🇮🇪', tz:'Europe/Dublin',                   accent:'#4ade80'},
  {id:'reykjavik',   name:'雷克雅未克',    nameEn:'Reykjavik',       country:'冰岛',         flag:'🇮🇸', tz:'Atlantic/Reykjavik',              accent:'#67e8f9'},
  // Americas
  {id:'newyork',     name:'纽约',          nameEn:'New York',        country:'美国',         flag:'🇺🇸', tz:'America/New_York',                accent:'#4ade80'},
  {id:'losangeles',  name:'洛杉矶',        nameEn:'Los Angeles',     country:'美国',         flag:'🇺🇸', tz:'America/Los_Angeles',             accent:'#60a5fa'},
  {id:'chicago',     name:'芝加哥',        nameEn:'Chicago',         country:'美国',         flag:'🇺🇸', tz:'America/Chicago',                 accent:'#34d399'},
  {id:'houston',     name:'休斯顿',        nameEn:'Houston',         country:'美国',         flag:'🇺🇸', tz:'America/Chicago',                 accent:'#a78bfa'},
  {id:'phoenix',     name:'菲尼克斯',      nameEn:'Phoenix',         country:'美国',         flag:'🇺🇸', tz:'America/Phoenix',                 accent:'#f43f5e'},
  {id:'denver',      name:'丹佛',          nameEn:'Denver',          country:'美国',         flag:'🇺🇸', tz:'America/Denver',                  accent:'#fb923c'},
  {id:'seattle',     name:'西雅图',        nameEn:'Seattle',         country:'美国',         flag:'🇺🇸', tz:'America/Los_Angeles',             accent:'#22d3ee'},
  {id:'miami',       name:'迈阿密',        nameEn:'Miami',           country:'美国',         flag:'🇺🇸', tz:'America/New_York',                accent:'#f472b6'},
  {id:'boston',      name:'波士顿',        nameEn:'Boston',          country:'美国',         flag:'🇺🇸', tz:'America/New_York',                accent:'#818cf8'},
  {id:'sanfrancisco',name:'旧金山',        nameEn:'San Francisco',   country:'美国',         flag:'🇺🇸', tz:'America/Los_Angeles',             accent:'#f59e0b'},
  {id:'lasvegas',    name:'拉斯维加斯',    nameEn:'Las Vegas',       country:'美国',         flag:'🇺🇸', tz:'America/Los_Angeles',             accent:'#facc15'},
  {id:'washington',  name:'华盛顿',        nameEn:'Washington D.C.', country:'美国',         flag:'🇺🇸', tz:'America/New_York',                accent:'#38bdf8'},
  {id:'atlanta',     name:'亚特兰大',      nameEn:'Atlanta',         country:'美国',         flag:'🇺🇸', tz:'America/New_York',                accent:'#f97316'},
  {id:'honolulu',    name:'檀香山',        nameEn:'Honolulu',        country:'美国夏威夷',   flag:'🇺🇸', tz:'Pacific/Honolulu',                accent:'#f472b6'},
  {id:'anchorage',   name:'安克雷奇',      nameEn:'Anchorage',       country:'美国阿拉斯加', flag:'🇺🇸', tz:'America/Anchorage',               accent:'#93c5fd'},
  {id:'toronto',     name:'多伦多',        nameEn:'Toronto',         country:'加拿大',       flag:'🇨🇦', tz:'America/Toronto',                 accent:'#f43f5e'},
  {id:'vancouver',   name:'温哥华',        nameEn:'Vancouver',       country:'加拿大',       flag:'🇨🇦', tz:'America/Vancouver',               accent:'#22d3ee'},
  {id:'montreal',    name:'蒙特利尔',      nameEn:'Montreal',        country:'加拿大',       flag:'🇨🇦', tz:'America/Toronto',                 accent:'#818cf8'},
  {id:'calgary',     name:'卡尔加里',      nameEn:'Calgary',         country:'加拿大',       flag:'🇨🇦', tz:'America/Edmonton',                accent:'#a78bfa'},
  {id:'ottawa',      name:'渥太华',        nameEn:'Ottawa',          country:'加拿大',       flag:'🇨🇦', tz:'America/Toronto',                 accent:'#fb7185'},
  {id:'mexico',      name:'墨西哥城',      nameEn:'Mexico City',     country:'墨西哥',       flag:'🇲🇽', tz:'America/Mexico_City',             accent:'#fb923c'},
  {id:'guadalajara', name:'瓜达拉哈拉',    nameEn:'Guadalajara',     country:'墨西哥',       flag:'🇲🇽', tz:'America/Mexico_City',             accent:'#fdba74'},
  {id:'saopaulo',    name:'圣保罗',        nameEn:'São Paulo',       country:'巴西',         flag:'🇧🇷', tz:'America/Sao_Paulo',               accent:'#a78bfa'},
  {id:'riojaneiro',  name:'里约热内卢',    nameEn:'Rio de Janeiro',  country:'巴西',         flag:'🇧🇷', tz:'America/Sao_Paulo',               accent:'#10b981'},
  {id:'brasilia',    name:'巴西利亚',      nameEn:'Brasília',        country:'巴西',         flag:'🇧🇷', tz:'America/Sao_Paulo',               accent:'#4ade80'},
  {id:'argentina',   name:'布宜诺斯艾利斯',nameEn:'Buenos Aires',    country:'阿根廷',       flag:'🇦🇷', tz:'America/Argentina/Buenos_Aires',  accent:'#22d3ee'},
  {id:'cordoba',     name:'科尔多瓦',      nameEn:'Córdoba',         country:'阿根廷',       flag:'🇦🇷', tz:'America/Argentina/Cordoba',       accent:'#67e8f9'},
  {id:'santiago',    name:'圣地亚哥',      nameEn:'Santiago',        country:'智利',         flag:'🇨🇱', tz:'America/Santiago',                accent:'#f59e0b'},
  {id:'lima',        name:'利马',          nameEn:'Lima',            country:'秘鲁',         flag:'🇵🇪', tz:'America/Lima',                    accent:'#ef4444'},
  {id:'bogota',      name:'波哥大',        nameEn:'Bogotá',          country:'哥伦比亚',     flag:'🇨🇴', tz:'America/Bogota',                  accent:'#fbbf24'},
  {id:'caracas',     name:'卡拉卡斯',      nameEn:'Caracas',         country:'委内瑞拉',     flag:'🇻🇪', tz:'America/Caracas',                 accent:'#f43f5e'},
  {id:'havana',      name:'哈瓦那',        nameEn:'Havana',          country:'古巴',         flag:'🇨🇺', tz:'America/Havana',                  accent:'#34d399'},
  {id:'panama',      name:'巴拿马城',      nameEn:'Panama City',     country:'巴拿马',       flag:'🇵🇦', tz:'America/Panama',                  accent:'#38bdf8'},
  {id:'sanjose',     name:'圣何塞',        nameEn:'San José',        country:'哥斯达黎加',   flag:'🇨🇷', tz:'America/Costa_Rica',              accent:'#4ade80'},
  {id:'quito',       name:'基多',          nameEn:'Quito',           country:'厄瓜多尔',     flag:'🇪🇨', tz:'America/Guayaquil',               accent:'#fbbf24'},
  {id:'lapaz',       name:'拉巴斯',        nameEn:'La Paz',          country:'玻利维亚',     flag:'🇧🇴', tz:'America/La_Paz',                  accent:'#f97316'},
  {id:'asuncion',    name:'亚松森',        nameEn:'Asunción',        country:'巴拉圭',       flag:'🇵🇾', tz:'America/Asuncion',                accent:'#a78bfa'},
  {id:'montevideo',  name:'蒙得维的亚',    nameEn:'Montevideo',      country:'乌拉圭',       flag:'🇺🇾', tz:'America/Montevideo',              accent:'#818cf8'},
  // Africa
  {id:'cairo',       name:'开罗',          nameEn:'Cairo',           country:'埃及',         flag:'🇪🇬', tz:'Africa/Cairo',                    accent:'#34d399'},
  {id:'lagos',       name:'拉各斯',        nameEn:'Lagos',           country:'尼日利亚',     flag:'🇳🇬', tz:'Africa/Lagos',                    accent:'#4ade80'},
  {id:'abuja',       name:'阿布贾',        nameEn:'Abuja',           country:'尼日利亚',     flag:'🇳🇬', tz:'Africa/Lagos',                    accent:'#86efac'},
  {id:'nairobi',     name:'内罗毕',        nameEn:'Nairobi',         country:'肯尼亚',       flag:'🇰🇪', tz:'Africa/Nairobi',                  accent:'#f87171'},
  {id:'johannesburg',name:'约翰内斯堡',    nameEn:'Johannesburg',    country:'南非',         flag:'🇿🇦', tz:'Africa/Johannesburg',             accent:'#22d3ee'},
  {id:'capetown',    name:'开普敦',        nameEn:'Cape Town',       country:'南非',         flag:'🇿🇦', tz:'Africa/Johannesburg',             accent:'#67e8f9'},
  {id:'casablanca',  name:'卡萨布兰卡',    nameEn:'Casablanca',      country:'摩洛哥',       flag:'🇲🇦', tz:'Africa/Casablanca',               accent:'#fb923c'},
  {id:'accra',       name:'阿克拉',        nameEn:'Accra',           country:'加纳',         flag:'🇬🇭', tz:'Africa/Accra',                    accent:'#fbbf24'},
  {id:'addisababa',  name:'亚的斯亚贝巴',  nameEn:'Addis Ababa',     country:'埃塞俄比亚',   flag:'🇪🇹', tz:'Africa/Addis_Ababa',              accent:'#84cc16'},
  {id:'khartoum',    name:'喀土穆',        nameEn:'Khartoum',        country:'苏丹',         flag:'🇸🇩', tz:'Africa/Khartoum',                 accent:'#f59e0b'},
  {id:'dakar',       name:'达喀尔',        nameEn:'Dakar',           country:'塞内加尔',     flag:'🇸🇳', tz:'Africa/Dakar',                    accent:'#60a5fa'},
  {id:'tunis',       name:'突尼斯',        nameEn:'Tunis',           country:'突尼斯',       flag:'🇹🇳', tz:'Africa/Tunis',                    accent:'#f43f5e'},
  {id:'algiers',     name:'阿尔及尔',      nameEn:'Algiers',         country:'阿尔及利亚',   flag:'🇩🇿', tz:'Africa/Algiers',                  accent:'#4ade80'},
  {id:'tripoli',     name:'的黎波里',      nameEn:'Tripoli',         country:'利比亚',       flag:'🇱🇾', tz:'Africa/Tripoli',                  accent:'#22d3ee'},
  {id:'luanda',      name:'罗安达',        nameEn:'Luanda',          country:'安哥拉',       flag:'🇦🇴', tz:'Africa/Luanda',                   accent:'#fb923c'},
  {id:'kinshasa',    name:'金沙萨',        nameEn:'Kinshasa',        country:'刚果（金）',   flag:'🇨🇩', tz:'Africa/Kinshasa',                 accent:'#a78bfa'},
  {id:'dar',         name:'达累斯萨拉姆',  nameEn:'Dar es Salaam',   country:'坦桑尼亚',     flag:'🇹🇿', tz:'Africa/Dar_es_Salaam',            accent:'#38bdf8'},
  {id:'kampala',     name:'坎帕拉',        nameEn:'Kampala',         country:'乌干达',       flag:'🇺🇬', tz:'Africa/Kampala',                  accent:'#fbbf24'},
  {id:'harare',      name:'哈拉雷',        nameEn:'Harare',          country:'津巴布韦',     flag:'🇿🇼', tz:'Africa/Harare',                   accent:'#f87171'},
  {id:'maputo',      name:'马普托',        nameEn:'Maputo',          country:'莫桑比克',     flag:'🇲🇿', tz:'Africa/Maputo',                   accent:'#4ade80'},
  // Oceania
  {id:'sydney',      name:'悉尼',          nameEn:'Sydney',          country:'澳大利亚',     flag:'🇦🇺', tz:'Australia/Sydney',                accent:'#fbbf24'},
  {id:'melbourne',   name:'墨尔本',        nameEn:'Melbourne',       country:'澳大利亚',     flag:'🇦🇺', tz:'Australia/Melbourne',             accent:'#38bdf8'},
  {id:'brisbane',    name:'布里斯班',      nameEn:'Brisbane',        country:'澳大利亚',     flag:'🇦🇺', tz:'Australia/Brisbane',              accent:'#4ade80'},
  {id:'perth',       name:'珀斯',          nameEn:'Perth',           country:'澳大利亚',     flag:'🇦🇺', tz:'Australia/Perth',                 accent:'#a78bfa'},
  {id:'adelaide',    name:'阿德莱德',      nameEn:'Adelaide',        country:'澳大利亚',     flag:'🇦🇺', tz:'Australia/Adelaide',              accent:'#f43f5e'},
  {id:'darwin',      name:'达尔文',        nameEn:'Darwin',          country:'澳大利亚',     flag:'🇦🇺', tz:'Australia/Darwin',                accent:'#fb923c'},
  {id:'auckland',    name:'奥克兰',        nameEn:'Auckland',        country:'新西兰',       flag:'🇳🇿', tz:'Pacific/Auckland',                accent:'#34d399'},
  {id:'wellington',  name:'惠灵顿',        nameEn:'Wellington',      country:'新西兰',       flag:'🇳🇿', tz:'Pacific/Auckland',                accent:'#22d3ee'},
  {id:'suva',        name:'苏瓦',          nameEn:'Suva',            country:'斐济',         flag:'🇫🇯', tz:'Pacific/Fiji',                    accent:'#38bdf8'},
  {id:'portmoresby', name:'莫尔兹比港',    nameEn:'Port Moresby',    country:'巴布亚新几内亚',flag:'🇵🇬', tz:'Pacific/Port_Moresby',           accent:'#fbbf24'},
  {id:'noumea',      name:'努美阿',        nameEn:'Nouméa',          country:'新喀里多尼亚', flag:'🇳🇨', tz:'Pacific/Noumea',                  accent:'#67e8f9'},
]

// ── 国家名称中→英映射 ──────────────────────────────────────────────────────────
const COUNTRY_EN = {
  '中国':'China', '中国香港':'Hong Kong, China', '中国台湾':'Taiwan, China', '中国澳门':'Macao, China',
  '日本':'Japan', '韩国':'South Korea', '新加坡':'Singapore', '泰国':'Thailand',
  '印度尼西亚':'Indonesia', '菲律宾':'Philippines', '马来西亚':'Malaysia', '缅甸':'Myanmar',
  '越南':'Vietnam', '柬埔寨':'Cambodia', '老挝':'Laos', '印度':'India',
  '孟加拉国':'Bangladesh', '巴基斯坦':'Pakistan', '尼泊尔':'Nepal', '斯里兰卡':'Sri Lanka',
  '乌兹别克斯坦':'Uzbekistan', '哈萨克斯坦':'Kazakhstan', '蒙古':'Mongolia', '伊朗':'Iran',
  '阿联酋':'UAE', '沙特阿拉伯':'Saudi Arabia', '伊拉克':'Iraq', '科威特':'Kuwait',
  '卡塔尔':'Qatar', '巴林':'Bahrain', '阿曼':'Oman', '以色列':'Israel',
  '土耳其':'Turkey', '阿塞拜疆':'Azerbaijan', '亚美尼亚':'Armenia', '格鲁吉亚':'Georgia',
  '英国':'UK', '法国':'France', '德国':'Germany', '意大利':'Italy',
  '西班牙':'Spain', '荷兰':'Netherlands', '比利时':'Belgium', '奥地利':'Austria',
  '瑞士':'Switzerland', '瑞典':'Sweden', '挪威':'Norway', '丹麦':'Denmark',
  '芬兰':'Finland', '波兰':'Poland', '希腊':'Greece', '葡萄牙':'Portugal',
  '俄罗斯':'Russia', '捷克':'Czech Republic', '匈牙利':'Hungary', '罗马尼亚':'Romania',
  '乌克兰':'Ukraine', '保加利亚':'Bulgaria', '塞尔维亚':'Serbia', '克罗地亚':'Croatia',
  '爱尔兰':'Ireland', '冰岛':'Iceland',
  '美国':'USA', '美国夏威夷':'USA (Hawaii)', '美国阿拉斯加':'USA (Alaska)',
  '加拿大':'Canada', '墨西哥':'Mexico', '巴西':'Brazil', '阿根廷':'Argentina',
  '智利':'Chile', '秘鲁':'Peru', '哥伦比亚':'Colombia', '委内瑞拉':'Venezuela',
  '古巴':'Cuba', '巴拿马':'Panama', '哥斯达黎加':'Costa Rica', '厄瓜多尔':'Ecuador',
  '玻利维亚':'Bolivia', '巴拉圭':'Paraguay', '乌拉圭':'Uruguay',
  '埃及':'Egypt', '尼日利亚':'Nigeria', '肯尼亚':'Kenya', '南非':'South Africa',
  '摩洛哥':'Morocco', '加纳':'Ghana', '埃塞俄比亚':'Ethiopia', '苏丹':'Sudan',
  '塞内加尔':'Senegal', '突尼斯':'Tunisia', '阿尔及利亚':'Algeria', '利比亚':'Libya',
  '安哥拉':'Angola', '刚果（金）':'DR Congo', '坦桑尼亚':'Tanzania', '乌干达':'Uganda',
  '津巴布韦':'Zimbabwe', '莫桑比克':'Mozambique',
  '澳大利亚':'Australia', '新西兰':'New Zealand', '斐济':'Fiji',
  '巴布亚新几内亚':'Papua New Guinea', '新喀里多尼亚':'New Caledonia',
}

// ── 国际化文案 ────────────────────────────────────────────────────────────────
const I18N = {
  zh: {
    title:             '🌐 跨时区时间转换',
    subtitle:          '拖动滑块，即时查看全球各城市时间',
    sliderLabel:       '参考时间',
    liveBtn:           '实时',
    copyBtn:           '复制',
    dayUnit:           '天',
    emptyState:        '点击下方按钮添加城市 🌍',
    addBtn:            '＋ 添加城市 / 区域',
    footer:            '基于 WeChat 小程序 · 数据来源于 IANA 时区数据库',
    modalTitle:        '🔍 添加城市',
    refModalTitle:     '🔍 选择参考城市',
    searchPlaceholder: '搜索城市、国家（支持中英文模糊搜索）…',
    modalEmpty:        '没有找到匹配的城市 😕',
    copied:            '已复制',
    langBtn:           'EN',
  },
  en: {
    title:             '🌐 Timezone Converter',
    subtitle:          'Drag slider to see world city times instantly',
    sliderLabel:       'Reference Time',
    liveBtn:           'Live',
    copyBtn:           'Copy',
    dayUnit:           'd',
    emptyState:        'Tap the button below to add cities 🌍',
    addBtn:            '＋ Add City / Region',
    footer:            'WeChat Mini Program · Data: IANA Timezone Database',
    modalTitle:        '🔍 Add City',
    refModalTitle:     '🔍 Select Reference City',
    searchPlaceholder: 'Search city or country…',
    modalEmpty:        'No cities found 😕',
    copied:            'Copied',
    langBtn:           '中',
  },
}

// ── 默认城市 & 存储键 ──────────────────────────────────────────────────────────
const STORAGE_KEY  = 'tz_cities_v1'
const LANG_KEY     = 'tz_lang_v1'
const REFCITY_KEY  = 'tz_refcity_v1'
const DEFAULT_IDS  = ['beijing','tokyo','london','newyork','mexico','saopaulo','toronto','argentina','sydney','cairo']
const DEFAULT_REF  = ALL_CITIES.find(c => c.id === 'beijing')

// ── 时间工具函数 ──────────────────────────────────────────────────────────────
function getTodayForTz(tz) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date())
}

function parseUtcOffsetMins(offsetStr) {
  const m = offsetStr.match(/UTC([+-])(\d+)(?::(\d+))?/)
  if (!m) return 0
  return (m[1] === '+' ? 1 : -1) * (parseInt(m[2]) * 60 + parseInt(m[3] || '0'))
}

function getDateForSlider(minutes, dateStr, refTz) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const offsetMins = parseUtcOffsetMins(getTzOffset(refTz))
  return new Date(Date.UTC(y, m - 1, d, Math.floor(minutes / 60) % 24, minutes % 60, 0) - offsetMins * 60000)
}

// lang 参数决定日期文字语言
function formatDateDisplay(dateStr, lang) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const locale = lang === 'en' ? 'en-US' : 'zh-CN'
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
  }).format(new Date(y, m - 1, d))
}

function formatTime(date, tz, fmt12) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: fmt12
  }).format(date)
}

// 卡片上的紧凑日期（如"周日 6月15日" / "Sun, Jun 15"）
function formatDate(date, tz, lang) {
  const locale  = lang === 'en' ? 'en-US' : 'zh-CN'
  const options = lang === 'en'
    ? { timeZone: tz, month: 'short', day: 'numeric', weekday: 'short' }
    : { timeZone: tz, month: 'long',  day: 'numeric', weekday: 'short' }
  return new Intl.DateTimeFormat(locale, options).format(date)
}

function getTzOffset(tz) {
  try {
    // 现代运行时支持 shortOffset
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz, timeZoneName: 'shortOffset'
    }).formatToParts(new Date())
    const p = parts.find(p => p.type === 'timeZoneName')
    if (p) return p.value.replace('GMT', 'UTC')
  } catch (e) {}
  // 降级：手动计算 UTC 偏移（兼容旧版微信/安卓运行时）
  try {
    const now = new Date()
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(now)
    const v = {}
    parts.forEach(p => { if (p.type !== 'literal') v[p.type] = parseInt(p.value) })
    const tzMs = Date.UTC(v.year, v.month - 1, v.day, v.hour % 24, v.minute)
    const utcMs = Date.UTC(
      now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
      now.getUTCHours(), now.getUTCMinutes()
    )
    let diff = Math.round((tzMs - utcMs) / 60000)
    if (diff > 720) diff -= 1440
    if (diff < -720) diff += 1440
    const h = Math.floor(Math.abs(diff) / 60)
    const m = Math.abs(diff) % 60
    const sign = diff >= 0 ? '+' : '-'
    return m === 0 ? `UTC${sign}${h}` : `UTC${sign}${h}:${pad(m)}`
  } catch (e2) {
    return tz
  }
}

function getDayDiff(date, tz, refTz) {
  const refDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: refTz, year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(date)
  const cityDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(date)
  return Math.round((new Date(cityDate) - new Date(refDate)) / 86400000)
}

function pad(n) { return String(n).padStart(2, '0') }

function minutesToStr(minutes) {
  return pad(Math.floor(minutes / 60) % 24) + ':' + pad(minutes % 60)
}

function fuzzyMatch(query, target) {
  if (!query) return true
  target = target.toLowerCase()
  query = query.toLowerCase().trim()
  if (target.includes(query)) return true
  let qi = 0
  for (let i = 0; i < target.length && qi < query.length; i++) {
    if (target[i] === query[qi]) qi++
  }
  return qi === query.length
}

// ── Page ──────────────────────────────────────────────────────────────────────
Page({
  data: {
    lang: 'zh',
    i18n: I18N.zh,
    refCity: DEFAULT_REF,
    cities: [],
    sliderMinutes: 720,
    useSlider: false,
    use12h: false,
    sliderDisplay: '12:00',
    liveDate: '',
    liveClock: '',
    selectedDateStr: '',
    selectedDateDisplay: '',
    minDateStr: '',
    maxDateStr: '',
    showModal: false,
    modalQuery: '',
    modalCities: [],
    showRefModal: false,
    refModalQuery: '',
    refModalCities: [],
    draggingIdx: -1,
    dragOverIdx: -1,
  },

  _rawCities: [],
  _timer: null,
  _dragIdx: -1,
  _cardRects: [],
  _lastTapTime: 0,

  // ── 生命周期 ────────────────────────────────────────────────────────────────
  onLoad() {
    this._loadLang()          // 必须最先执行，后续函数依赖 lang
    this._loadRefCity()
    this._loadCities()
    this._initDateRange()
    this._updateAll()
    this._updateLiveClock()
    this._timer = setInterval(() => {
      this._updateLiveClock()
      if (!this.data.useSlider) this._updateAll()
    }, 1000)
  },

  onUnload() {
    if (this._timer) clearInterval(this._timer)
  },

  // ── 语言切换 ────────────────────────────────────────────────────────────────
  _loadLang() {
    try {
      const lang = wx.getStorageSync(LANG_KEY)
      if (lang === 'en' || lang === 'zh') {
        this.setData({ lang, i18n: I18N[lang] })
      }
    } catch (e) {}
  },

  toggleLang() {
    const lang = this.data.lang === 'zh' ? 'en' : 'zh'
    try { wx.setStorageSync(LANG_KEY, lang) } catch (e) {}
    this.setData({ lang, i18n: I18N[lang] })
    // 滑块模式下需刷新日期文字
    if (this.data.useSlider && this.data.selectedDateStr) {
      this.setData({ selectedDateDisplay: formatDateDisplay(this.data.selectedDateStr, lang) })
    }
    this._updateLiveClock()
    this._updateAll()
    this._renderModalList(this.data.modalQuery)
    if (this.data.showRefModal) {
      this._renderRefModalList(this.data.refModalQuery)
    }
  },

  // ── 参考城市 ─────────────────────────────────────────────────────────────────
  _loadRefCity() {
    try {
      const id = wx.getStorageSync(REFCITY_KEY)
      if (id) {
        const city = ALL_CITIES.find(c => c.id === id)
        if (city) this.setData({ refCity: city })
      }
    } catch (e) {}
  },

  _saveRefCity(city) {
    try { wx.setStorageSync(REFCITY_KEY, city.id) } catch (e) {}
  },

  openRefModal() {
    this.setData({ showRefModal: true, refModalQuery: '' })
    this._renderRefModalList('')
  },

  closeRefModal() {
    this.setData({ showRefModal: false })
  },

  onRefSearchInput(e) {
    const query = e.detail.value
    this.setData({ refModalQuery: query })
    this._renderRefModalList(query)
  },

  _renderRefModalList(query) {
    const { lang, refCity } = this.data
    const results = ALL_CITIES.filter(c =>
      fuzzyMatch(query, c.name) ||
      fuzzyMatch(query, c.nameEn) ||
      fuzzyMatch(query, c.country) ||
      fuzzyMatch(query, COUNTRY_EN[c.country] || '')
    )
    this.setData({
      refModalCities: results.map(c => ({
        ...c,
        isCurrentRef:   c.id === refCity.id,
        nameDisplay:    lang === 'en' ? c.nameEn : c.name,
        nameSecondary:  lang === 'en' ? c.name   : c.nameEn,
        countryDisplay: lang === 'en' ? (COUNTRY_EN[c.country] || c.country) : c.country,
        tzOffset:       getTzOffset(c.tz),
      }))
    })
  },

  selectRefCity(e) {
    const cityData = e.currentTarget.dataset.city
    if (!cityData) return
    const city = ALL_CITIES.find(c => c.id === cityData.id)
    if (!city) return
    this._saveRefCity(city)
    const { lang } = this.data
    const todayRef = getTodayForTz(city.tz)
    this.setData({
      refCity: city,
      showRefModal: false,
      useSlider: false,
      selectedDateStr: todayRef,
      selectedDateDisplay: formatDateDisplay(todayRef, lang),
    })
    this._updateAll()
    this._updateLiveClock()
  },

  // ── 日期范围初始化 ─────────────────────────────────────────────────────────
  _initDateRange() {
    const now = new Date()
    const { lang, refCity } = this.data
    const todayRef = getTodayForTz(refCity.tz)
    const oneYearAgo = new Date(now)
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
    const oneYearLater = new Date(now)
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1)
    const minDateStr = new Intl.DateTimeFormat('en-CA', {
      timeZone: refCity.tz, year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(oneYearAgo)
    const maxDateStr = new Intl.DateTimeFormat('en-CA', {
      timeZone: refCity.tz, year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(oneYearLater)
    this.setData({
      selectedDateStr: todayRef,
      selectedDateDisplay: formatDateDisplay(todayRef, lang),
      minDateStr,
      maxDateStr,
    })
  },

  // ── 持久化 ──────────────────────────────────────────────────────────────────
  _loadCities() {
    let ids = DEFAULT_IDS
    try {
      const saved = wx.getStorageSync(STORAGE_KEY)
      if (saved && Array.isArray(saved) && saved.length > 0) ids = saved
    } catch (e) {}
    this._rawCities = ids
      .map(id => ALL_CITIES.find(c => c.id === id))
      .filter(Boolean)
  },

  _saveCities() {
    try {
      wx.setStorageSync(STORAGE_KEY, this._rawCities.map(c => c.id))
    } catch (e) {}
  },

  // ── 时间更新 ────────────────────────────────────────────────────────────────
  _updateAll() {
    const { sliderMinutes, useSlider, use12h, selectedDateStr, lang, refCity } = this.data
    const refDate = useSlider ? getDateForSlider(sliderMinutes, selectedDateStr, refCity.tz) : new Date()

    if (!useSlider) {
      const refParts = new Intl.DateTimeFormat('en-US', {
        timeZone: refCity.tz, hour: '2-digit', minute: '2-digit', hour12: false
      }).format(refDate).split(':')
      const mins = Math.round((parseInt(refParts[0]) * 60 + parseInt(refParts[1])) / 15) * 15
      this.data.sliderMinutes = mins
    }

    const cities = this._rawCities.map(city => {
      const timeStr = formatTime(refDate, city.tz, use12h)
      let timeMain = timeStr
      let timeAmpm = ''
      if (use12h) {
        const m = timeStr.match(/^(\d+:\d+)\s*(AM|PM)$/i)
        if (m) { timeMain = m[1]; timeAmpm = m[2] }
      }
      const dayDiff = getDayDiff(refDate, city.tz, refCity.tz)
      return {
        ...city,
        nameDisplay: lang === 'en' ? city.nameEn : city.name,
        timeMain,
        timeAmpm,
        dateStr: formatDate(refDate, city.tz, lang),
        tzOffset: getTzOffset(city.tz),
        dayDiff,
      }
    })

    this.setData({
      cities,
      sliderMinutes: this.data.sliderMinutes,
      sliderDisplay: minutesToStr(this.data.sliderMinutes),
    })
  },

  _updateLiveClock() {
    const { lang, refCity } = this.data
    const now = new Date()
    const locale = lang === 'en' ? 'en-US' : 'zh-CN'
    const liveDate = new Intl.DateTimeFormat(locale, {
      timeZone: refCity.tz, year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
    }).format(now)
    const liveClock = new Intl.DateTimeFormat('en-US', {
      timeZone: refCity.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(now)
    const updates = { liveDate, liveClock }
    if (!this.data.useSlider) {
      const todayRef = getTodayForTz(refCity.tz)
      updates.selectedDateStr = todayRef
      updates.selectedDateDisplay = liveDate
    }
    this.setData(updates)
  },

  // ── 滑块 ────────────────────────────────────────────────────────────────────
  onSliderChanging(e) {
    const minutes = parseInt(e.detail.value)
    const { lang } = this.data
    const updates = {
      sliderMinutes: minutes,
      useSlider: true,
      sliderDisplay: minutesToStr(minutes),
    }
    if (!this.data.useSlider) {
      updates.selectedDateDisplay = formatDateDisplay(this.data.selectedDateStr || getTodayForTz(this.data.refCity.tz), lang)
    }
    this.setData(updates)
    this._updateAll()
  },

  onSliderChange(e) {
    const minutes = parseInt(e.detail.value)
    const { lang } = this.data
    const updates = {
      sliderMinutes: minutes,
      useSlider: true,
      sliderDisplay: minutesToStr(minutes),
    }
    if (!this.data.useSlider) {
      updates.selectedDateDisplay = formatDateDisplay(this.data.selectedDateStr || getTodayForTz(this.data.refCity.tz), lang)
    }
    this.setData(updates)
    this._updateAll()
  },

  onSliderAreaTap() {
    const now = Date.now()
    if (now - this._lastTapTime < 400) {
      const { lang, refCity } = this.data
      const todayRef = getTodayForTz(refCity.tz)
      this.setData({
        useSlider: false,
        selectedDateStr: todayRef,
        selectedDateDisplay: formatDateDisplay(todayRef, lang),
      })
      this._updateAll()
    }
    this._lastTapTime = now
  },

  onResetSlider() {
    const { lang, refCity } = this.data
    const todayRef = getTodayForTz(refCity.tz)
    this.setData({
      useSlider: false,
      selectedDateStr: todayRef,
      selectedDateDisplay: formatDateDisplay(todayRef, lang),
    })
    this._updateAll()
  },

  onDatePickerChange(e) {
    const dateStr = e.detail.value
    const { lang, refCity } = this.data
    const selectedDateDisplay = formatDateDisplay(dateStr, lang)
    let sliderMinutes = this.data.sliderMinutes
    if (!this.data.useSlider) {
      const now = new Date()
      const refParts = new Intl.DateTimeFormat('en-US', {
        timeZone: refCity.tz, hour: '2-digit', minute: '2-digit', hour12: false
      }).format(now).split(':')
      sliderMinutes = Math.round((parseInt(refParts[0]) * 60 + parseInt(refParts[1])) / 15) * 15
    }
    this.setData({
      selectedDateStr: dateStr,
      selectedDateDisplay,
      useSlider: true,
      sliderMinutes,
      sliderDisplay: minutesToStr(sliderMinutes),
    })
    this._updateAll()
  },

  toggleFormat() {
    const use12h = !this.data.use12h
    this.setData({ use12h })
    this._updateAll()
  },

  // ── 城市卡片操作 ─────────────────────────────────────────────────────────────
  copyTime(e) {
    const idx = e.currentTarget.dataset.idx
    const city = this.data.cities[idx]
    if (!city) return
    const text = `${city.nameDisplay}: ${city.timeMain}${city.timeAmpm ? ' ' + city.timeAmpm : ''} (${city.dateStr})`
    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showToast({ title: this.data.i18n.copied, icon: 'success', duration: 1500 })
      },
    })
  },

  deleteCity(e) {
    const idx = e.currentTarget.dataset.idx
    this._rawCities.splice(idx, 1)
    this._saveCities()
    this._updateAll()
  },

  // ── 拖拽排序 ─────────────────────────────────────────────────────────────────
  onDragStart(e) {
    const idx = parseInt(e.currentTarget.dataset.idx)
    this._dragIdx = idx
    this.setData({ draggingIdx: idx, dragOverIdx: idx })
    this.createSelectorQuery()
      .selectAll('.card')
      .boundingClientRect(rects => { this._cardRects = rects || [] })
      .exec()
  },

  onDragMove(e) {
    if (this._dragIdx === -1) return
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    let targetIdx = this._dragIdx
    if (this._cardRects && this._cardRects.length > 0) {
      for (let i = 0; i < this._cardRects.length; i++) {
        const r = this._cardRects[i]
        if (r && y >= r.top && y <= r.bottom && x >= r.left && x <= r.right) {
          targetIdx = i
          break
        }
      }
    }
    if (targetIdx !== this.data.dragOverIdx) {
      this.setData({ dragOverIdx: targetIdx })
    }
  },

  onDragEnd() {
    const fromIdx = this._dragIdx
    const toIdx = this.data.dragOverIdx
    this._dragIdx = -1
    if (fromIdx !== -1 && toIdx !== -1 && fromIdx !== toIdx) {
      const [item] = this._rawCities.splice(fromIdx, 1)
      this._rawCities.splice(toIdx, 0, item)
      this._saveCities()
    }
    this.setData({ draggingIdx: -1, dragOverIdx: -1 })
    this._updateAll()
  },

  // ── 添加城市弹窗 ─────────────────────────────────────────────────────────────
  openModal() {
    this.setData({ showModal: true, modalQuery: '' })
    this._renderModalList('')
  },

  closeModal() {
    this.setData({ showModal: false })
  },

  onSearchInput(e) {
    const query = e.detail.value
    this.setData({ modalQuery: query })
    this._renderModalList(query)
  },

  _renderModalList(query) {
    const { lang } = this.data
    const addedIds = new Set(this._rawCities.map(c => c.id))
    const results = ALL_CITIES.filter(c =>
      fuzzyMatch(query, c.name) ||
      fuzzyMatch(query, c.nameEn) ||
      fuzzyMatch(query, c.country) ||
      fuzzyMatch(query, COUNTRY_EN[c.country] || '')
    )
    this.setData({
      modalCities: results.map(c => ({
        ...c,
        alreadyAdded:   addedIds.has(c.id),
        nameDisplay:    lang === 'en' ? c.nameEn : c.name,
        nameSecondary:  lang === 'en' ? c.name   : c.nameEn,
        countryDisplay: lang === 'en' ? (COUNTRY_EN[c.country] || c.country) : c.country,
      }))
    })
  },

  addCity(e) {
    const city = e.currentTarget.dataset.city
    if (!city || this._rawCities.find(c => c.id === city.id)) return
    this._rawCities.push(ALL_CITIES.find(c => c.id === city.id))
    this._saveCities()
    this._updateAll()
    this._renderModalList(this.data.modalQuery)
  },
})
