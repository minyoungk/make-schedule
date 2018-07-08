<template>
    <div style="width:600px; margin:0 auto">
        <h1 style="text-align:center;">시간표 자동 생성</h1>

        학과 선택 : <v-select v-model="major_selected" :options="major_options" :on-change="changedMajorValue" value="aaa"></v-select>
        과목 선택 : <v-select multiple v-model="subject_selected" :options="subject_options" :on-change="changedSubjectValue"></v-select>
        조합 제외 : <v-select multiple v-model="except_selected" :options="except_options" :on-change="changedSubjectValue"></v-select>
        <div v-show="subject_selected.length > 0 && case_count > 0">
            <span>총 {{case_count}}개의 시간표가 존재합니다.</span>
            <table style="width:600px;" border="1">
                <tbody>
                <tr>
                    <th width="5%"></th>
                    <th width="15%" style="background: #ededed;">월</th>
                    <th width="15%" style="background: #ededed;">화</th>
                    <th width="15%" style="background: #ededed;">수</th>
                    <th width="15%" style="background: #ededed;">목</th>
                    <th width="15%" style="background: #ededed;">금</th>
                </tr>
                <tr>
                    <td style="background: #ededed;">1</td>
                    <td>{{show_sub[0]}}</td>
                    <td>{{show_sub[8]}}</td>
                    <td>{{show_sub[16]}}</td>
                    <td>{{show_sub[24]}}</td>
                    <td>{{show_sub[32]}}</td>
                </tr>
                <tr>
                    <td style="background: #ededed;">2</td>
                    <td>{{show_sub[1]}}</td>
                    <td>{{show_sub[9]}}</td>
                    <td>{{show_sub[17]}}</td>
                    <td>{{show_sub[25]}}</td>
                    <td>{{show_sub[33]}}</td>
                </tr>
                <tr>
                    <td style="background: #ededed;">3</td>
                    <td>{{show_sub[2]}}</td>
                    <td>{{show_sub[10]}}</td>
                    <td>{{show_sub[18]}}</td>
                    <td>{{show_sub[26]}}</td>
                    <td>{{show_sub[34]}}</td>
                </tr>
                <tr>

                    <td style="background: #ededed;">4</td>
                    <td>{{show_sub[3]}}</td>
                    <td>{{show_sub[11]}}</td>
                    <td>{{show_sub[19]}}</td>
                    <td>{{show_sub[27]}}</td>
                    <td>{{show_sub[35]}}</td>
                </tr>
                <tr>
                    <td style="background: #ededed;">5</td>
                    <td>{{show_sub[4]}}</td>
                    <td>{{show_sub[12]}}</td>
                    <td>{{show_sub[20]}}</td>
                    <td>{{show_sub[28]}}</td>
                    <td>{{show_sub[36]}}</td>
                </tr>
                <tr>
                    <td style="background: #ededed;">6</td>
                    <td>{{show_sub[5]}}</td>
                    <td>{{show_sub[13]}}</td>
                    <td>{{show_sub[21]}}</td>
                    <td>{{show_sub[29]}}</td>
                    <td>{{show_sub[37]}}</td>
                </tr>
                <tr>
                    <td style="background: #ededed;">7</td>
                    <td>{{show_sub[6]}}</td>
                    <td>{{show_sub[14]}}</td>
                    <td>{{show_sub[22]}}</td>
                    <td>{{show_sub[30]}}</td>
                    <td>{{show_sub[38]}}</td>
                </tr>
                <tr>
                    <td style="background: #ededed;">8</td>
                    <td>{{show_sub[7]}}</td>
                    <td>{{show_sub[15]}}</td>
                    <td>{{show_sub[23]}}</td>
                    <td>{{show_sub[31]}}</td>
                    <td>{{show_sub[39]}}</td>
                </tr>
                </tbody>
            </table>
            <div style="width:600px; margin :0 auto;">
                <button v-show="now_case > 1" v-on:click="changeCase(now_case-1)"><</button>
                <input style="width : 50px;" type="text" v-model="now_case" v-on:input="changeCase(now_case)">번 조합
                <button v-show="now_case < case_count" v-on:click="changeCase(now_case+1)">></button>
            </div>

        </div>

    </div>
</template>

<script>
    import vSelect from 'vue-select';

    export default {
        name: 'app',
        components: {
            vSelect
        },
        data: () => ({
            time_arr : [], // 경우의수 Array
            show_sub : [], // 테이블 노출 Array
            case_count : 0, // 전체 조합번호
            now_case : 1, //현재 조합번호
            except_options: [
                {
                    label : "월 - 1교시",
                    value : 1
                },
                {
                    label : "월 - 2교시",
                    value : 2
                },
                {
                    label : "월 - 3교시",
                    value : 3
                },
                {
                    label : "월 - 4교시",
                    value : 4
                },
                {
                    label : "월 - 5교시",
                    value : 5
                },
                {
                    label : "월 - 6교시",
                    value : 6
                },
                {
                    label : "월 - 7교시",
                    value : 7
                },
                {
                    label : "월 - 8교시",
                    value : 8
                },
                {
                    label : "화 - 1교시",
                    value : 9
                },
                {
                    label : "화 - 2교시",
                    value : 10
                },
                {
                    label : "화 - 3교시",
                    value : 11
                },
                {
                    label : "화 - 4교시",
                    value : 12
                },
                {
                    label : "화 - 5교시",
                    value : 13
                },
                {
                    label : "화 - 6교시",
                    value : 14
                },
                {
                    label : "화 - 7교시",
                    value : 15
                },
                {
                    label : "화 - 8교시",
                    value : 16
                },
                {
                    label : "수 - 1교시",
                    value : 17
                },
                {
                    label : "수 - 2교시",
                    value : 18
                },
                {
                    label : "수 - 3교시",
                    value : 19
                },
                {
                    label : "수 - 4교시",
                    value : 20
                },
                {
                    label : "수 - 5교시",
                    value : 21
                },
                {
                    label : "수 - 6교시",
                    value : 22
                },
                {
                    label : "수 - 7교시",
                    value : 23
                },
                {
                    label : "목 - 8교시",
                    value : 24
                },
                {
                    label : "목 - 1교시",
                    value : 25
                },
                {
                    label : "목 - 2교시",
                    value : 26
                },
                {
                    label : "목 - 3교시",
                    value : 27
                },
                {
                    label : "목 - 4교시",
                    value : 28
                },
                {
                    label : "목 - 5교시",
                    value : 29
                },
                {
                    label : "목 - 6교시",
                    value : 30
                },
                {
                    label : "목 - 7교시",
                    value : 31
                },
                {
                    label : "목 - 8교시",
                    value : 32
                },
                {
                    label : "금 - 1교시",
                    value : 33
                },
                {
                    label : "금 - 2교시",
                    value : 34
                },
                {
                    label : "금 - 3교시",
                    value : 35
                },
                {
                    label : "금 - 4교시",
                    value : 36
                },
                {
                    label : "금 - 5교시",
                    value : 37
                },
                {
                    label : "금 - 6교시",
                    value : 38
                },
                {
                    label : "금 - 7교시",
                    value : 39
                },
                {
                    label : "금 - 8교시",
                    value : 40
                }
            ],
            except_selected: [],
            subject_options: [], // 강의리스트
            subject_selected : [], // 선택강의
            major_selected : "", // 선택학과
            major_options : [, // 학과리스트
                {label : "컴퓨터공학과", value : 0},
                {label : "경영학부", value : 1}
            ],
            timeTables : [
                {
                    name : "컴퓨터공학부",
                    subject : [
                        {
                            label : "수학1",
                            credit : 3,
                            time : [[1,2,3,4],[1,2,5,6],[3,4,5,6]]
                        },
                        {
                            label : "전산학기초",
                            credit : 3,
                            time : [[7,8,9,10],[7,8,11,12],[9,10,11,12]]
                        },
                        {
                            label : "프로그래밍기초",
                            credit : 3,
                            time : [[13,14,15,16],[13,14,17,18],[15,16,17,18]],
                        },
                        {
                            label : "하드웨어기초",
                            credit : 3,
                            time : [[1,2,3,4],[13,14,1,2],[3,4,13,14]]
                        },
                        {
                            label : "선형대수학",
                            credit : 3,
                            time : [[25,26],[27,28],[29,30]]
                        },
                        {
                            label : "이산수학",
                            credit : 3,
                            time : [[31,32],[33,34],[35,36]]
                        },
                        {
                            label : "프로그래밍",
                            credit : 3,
                            time : [[37,38],[39,40],[1,2]]
                        },
                        {
                            label : "자료구조",
                            credit : 3,
                            time : [[3,4],[5,6],[7,8]]
                        },
                        {
                            label : "논리회로",
                            credit : 3,
                            time : [[9,10],[11,12],[13,14]]
                        },
                        {
                            label : "객체지향언어",
                            credit : 3,
                            time : [[15,16],[17,18],[19,20]]
                        },
                        {
                            label : "운영체제",
                            credit : 3,
                            time : [[21,22],[23,24],[25,26]]
                        },
                        {
                            label : "디지털신호처리",
                            credit : 3,
                            time : [[27,28],[29,30],[31,32]]
                        },
                        {
                            label : "글쓰기",
                            credit : 2,
                            time : [[7,8],[1,2],[39,40]]
                        },
                        {
                            label : "영어1",
                            credit : 2,
                            time : [[9,10],[11,12],[15,16]]
                        },
                        {
                            label : "프레시맨세미나",
                            credit : 2,
                            time : [[1,2],[21,22],[37,38]]
                        },
                        {
                            label : "일반생물학",
                            credit : 2,
                            time : [[23,24],[11,12],[15,16]]
                        },
                        {
                            label : "유닉스기초",
                            credit : 3,
                            time : [[3,4],[28,29],[23,24]]
                        },
                        {
                            label : "전공영어",
                            credit : 2,
                            time : [[5,6],[37,38],[17,18]]
                        },
                        {
                            label : "현장실습 및 진로 설계",
                            credit : 2,
                            time : [[9,10],[11,12],[25,26]]
                        }
                    ]
                },{
                    name : "경영학부",
                    subject : [
                        {
                            label : "경영수학",
                            credit : 3,
                            time : [[1,2,3,4],[1,2,5,6],[3,4,5,6]]
                        },
                        {
                            label : "경영학원론",
                            credit : 3,
                            time : [[7,8,9,10],[7,8,11,12],[9,10,11,12]]
                        },
                        {
                            label : "문제해결과프로그래밍",
                            credit : 3,
                            time : [[13,14,15,16],[13,14,17,18],[15,16,17,18]],
                        },
                        {
                            label : "경영통계학",
                            credit : 3,
                            time : [[1,2,3,4],[13,14,1,2],[3,4,13,14]]
                        },
                        {
                            label : "웹프로그래밍기초",
                            credit : 3,
                            time : [[25,26],[27,28],[29,30]]
                        },
                        {
                            label : "재무관리",
                            credit : 3,
                            time : [[31,32],[33,34],[35,36]]
                        },
                        {
                            label : "프레임워크",
                            credit : 3,
                            time : [[37,38],[39,40],[1,2]]
                        },
                        {
                            label : "모바일서비스디자인",
                            credit : 3,
                            time : [[3,4],[5,6],[7,8]]
                        },
                        {
                            label : "빅데이터분석",
                            credit : 3,
                            time : [[9,10],[11,12],[13,14]]
                        },
                        {
                            label : "객체지향언어",
                            credit : 3,
                            time : [[15,16],[17,18],[19,20]]
                        },
                        {
                            label : "모바일서비스디자인",
                            credit : 3,
                            time : [[21,22],[23,24],[25,26]]
                        },
                        {
                            label : "물류관리",
                            credit : 3,
                            time : [[27,28],[29,30],[31,32]]
                        },
                        {
                            label : "글쓰기",
                            credit : 2,
                            time : [[7,8],[1,2],[39,40]]
                        },
                        {
                            label : "영어1",
                            credit : 2,
                            time : [[9,10],[11,12],[15,16]]
                        },
                        {
                            label : "프레시맨세미나",
                            credit : 2,
                            time : [[1,2],[21,22],[37,38]]
                        },
                        {
                            label : "일반생물학",
                            credit : 2,
                            time : [[23,24],[11,12],[15,16]]
                        },
                        {
                            label : "유닉스기초",
                            credit : 3,
                            time : [[3,4],[28,29],[23,24]]
                        },
                        {
                            label : "전공영어",
                            credit : 2,
                            time : [[5,6],[37,38],[17,18]]
                        },
                        {
                            label : "현장실습 및 진로 설계",
                            credit : 2,
                            time : [[9,10],[11,12],[25,26]]
                        }
                    ]
                }
            ],
        }),
        created: function () {
            //API 불러오기
            /*this.$http.get('localhost:3000/getSchedule').then(res => {
                this.timeTables = res.data;
            });*/
        },
        mounted: function () {

        },
        methods: {
            /**
             * 과 변경시 처리
             * **/
            changedMajorValue: function(value) {
                this.time_arr = [];
                this.show_sub = [];
                this.subject_selected = [], // 선택강의
                this.case_count = 0; // 전체 조합번호
                this.now_case = 1; //현재 조합번호

                if(_.isNull(value)){
                    return false;
                }

                let locate = value.value;

                if(!_.isUndefined(locate)){
                    this.subject_options = this.timeTables[locate].subject;
                }
            },
            /**
             * 과목 또는 조합제외 선택 시 처리
             * **/
            changedSubjectValue: function() {

                //예외날짜 확인
                let except_arr = [];
                if(this.except_selected.length > 0){
                    _.map(this.except_selected, function(v){
                        except_arr.push(v.value);
                    })
                }

                //학점계산
                let all_credit = _.sumBy(this.subject_selected, 'credit');

                if(all_credit > 21){
                    alert("총 학점은 21학점을 초과 할 수 없습니다.");

                    this.subject_selected.pop();
                }


                //경우의수 계산을 위한 필드수 계산
                let case_arr = [];

                _.map(this.subject_selected, function(v){
                    let arr = [];
                    for(let i=0; i<v.time.length; i++){
                        arr.push(i);
                    }
                    case_arr.push(arr);
                });

                //시간중복제거 및 경우의수 저장
                if(case_arr.length > 0){
                    let all_case = AllCase(case_arr);
                    let time_arr = [];
                    let cnt = 0;
                    let selected = this.subject_selected;

                    _.map(all_case, function(v){
                        time_arr[cnt] = [];
                        let overlab_chk_arr = [];

                        _.map(v, function(v2,k2){
                            //중복체크 배열 저장
                            overlab_chk_arr.push(selected[k2].time[v2]);

                            //경우의수 저장
                            time_arr[cnt].push({
                                name : selected[k2].label,
                                time : selected[k2].time[v2]
                            });
                        });

                        //중복체크 및 날짜예외처리
                        let check_str_arr = [];
                        let overlab_flag = false;

                        _.map(overlab_chk_arr,function (v3) {
                            _.map(v3, function(v4){

                                if(_.indexOf(check_str_arr, v4) != -1 || _.indexOf(except_arr, v4) != -1){
                                    overlab_flag = true;
                                }else{
                                    check_str_arr.push(v4);
                                }
                            });
                        });

                        if(!overlab_flag){
                            cnt++;
                        }else{
                            time_arr[cnt].pop();
                        }
                    });

                    //과목 개수 불일치일경우 배열제거

                    _.map(time_arr, function (v, k){
                       if(v.length != selected.length){
                           time_arr.splice(k,1);
                       }
                    });

                    this.time_arr = time_arr;
                    this.case_count = time_arr.length;
                    this.changeCase();
                }else{
                    this.case_count = 0;
                }
            },
            /**
             * 경우의수 변경
             * **/
            changeCase: function(number){
                this.now_case = number;
                this.show_sub = [];

                _.isUndefined(number) ? number = 0 : number = number-1;

                if(number + 1 > this.case_count && number != 0){
                    alert("총 조합은 " +this.time_arr.length+" 까지 존재 합니다.");
                    this.now_case = "";
                }

                if(number == 0){
                    this.now_case = 1;
                }

                this.initShowArr(40);

                let show_sub = this.show_sub;

                _.map(this.time_arr[number],function (v){
                    _.map(v.time, function(v2){

                        show_sub[v2-1] = v.name;
                    })
                });


                this.show_sub = show_sub;
            },
            /**
             * 테이블노출 배열초기화
             * **/
            initShowArr(end){
                for(let i=0; i<end; i++){
                    this.show_sub[i] = "";
                }
            }
        }
    }


    /**
     * 경우의수 생성 함수
     * **/
    function AllCase(arg) {
        let r = [], max = arg.length-1;

        function make(arr, i) {
            for (let j=0, length=arg[i].length; j<length; j++) {
                let a = arr.slice(0);

                a.push(arg[i][j]);
                if (i==max){
                    r.push(a);
                } else{
                    make(a, i+1);
                }

            }
        }

        make([], 0);

        return r;
    }

</script>
