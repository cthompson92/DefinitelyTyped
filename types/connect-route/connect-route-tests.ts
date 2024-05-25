import connect from "connect";
import connectRoute from "connect-route";
import * as http from "http";

const app = connect();

app.use(connectRoute(function(router) {
    router.get("/", function(req, res, next) {
        res.end("index");
    });

    router.get("/home", function(req, res, next) {
        res.end("home");
    });

    router.get<{ id?: string }>(
        "/home/:id",
        function(req, res, next) {
            res.end("home " + req.params.id);
        },
    );

    router.post("/home", function(req, res, next) {
        res.end("POST to home");
    });
}));

app.use(
    "/users",
    connectRoute(function(router) {
        router.get("/", function(req, res, next) {
            res.end("index");
        });

        router.get(
            "/home",
            function(req, res, next) {
                res.end("home");
            },
        );

        router.get(
            "/home/:id",
            function(req, res, next) {
                res.end("home " + req.params.id);
            },
        );

        router.post(
            "/home",
            function(req, res, next) {
                res.end("POST to home");
            },
        );
    }),
);
app.listen(3000);
