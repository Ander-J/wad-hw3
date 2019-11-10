  <template>
    <div id="profile-container" :class="tab">
        <div id="profile">
            <div class="avatar">
                <img src="../assets/me.png" id="picture" alt="My picture">
            </div>
            <div class="info">
                <ul>
                    <li id="name">{{user.firstname + " " + user.lastname}}</li>
                    <li id="birthdate">{{user.birthdate}}</li>
                    <li id="faculty">{{user.faculty}}</li>
                </ul>
            </div>
            <div id="gpa">
                <strong>2.76</strong>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        props: {
            user: Object,
            tab: String,
         
        },
    
    methods: {
            calculateGpa: function() {
                let sum = 0;
                const nrOfCourses = this.courses.length;
                for (let i = 0; i < nrOfCourses; i++) {
                    if (this.courses[i].grade > 90) {
                        sum += 4;
                    } else if (this.courses[i].grade > 80) {
                        sum += 3;
                    } else if (this.courses[i].grade > 70) {
                        sum += 2;
                    } else if (this.courses[i].grade > 60) {
                        sum += 1;
                    } else if (this.courses[i].grade > 50) {
                        sum += 0.5;
                    }
                }
                this.user.gpa = Math.round((sum / nrOfCourses) * 100) / 100;
                return this.user.gpa;
            }
        }
    }
 
    
</script>

<style scoped>
</style>