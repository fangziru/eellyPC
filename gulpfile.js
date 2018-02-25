var gulp=require("gulp");
var sass=require("gulp-sass");

gulp.task("sasstocss",function(){
	//拿到index01.scss，进行sass()的处理，放到css目录下
	gulp.src("indexAdd.scss").pipe(sass()).pipe(gulp.dest("css"));
	gulp.src("footer.scss").pipe(sass()).pipe(gulp.dest("css"));
});

gulp.task("watch",function(){
	gulp.watch("indexAdd.scss",["sasstocss"]);
	gulp.watch("footer.scss",["sasstocss"]);
});

