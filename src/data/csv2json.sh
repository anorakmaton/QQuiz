#!/bin/bash

csvFilePath="demoQuestion.csv" # CSVファイルのパスを指定
jsonFilePath="demoQuestion.json"

# CSVファイルを読み込み、JSON形式に変換
jsonData=$(awk -F, '
BEGIN {
    print "["
}
NR > 1 {
    if (NR > 2) {
        printf ",\n"
    }
    printf "{\n"
    printf "  \"id\": %d,\n", NR-1
    printf "  \"text\": \"%s\",\n", $1
    printf "  \"options\": [\"%s\", \"%s\", \"%s\", \"%s\"],\n", $2, $3, $4, $5
    printf "  \"correctAnswer\": %d,\n", $6 - 1
    printf "  \"explanation\": \"%s\",\n", $7
    printf "  \"explanationImage\": \"%s\"\n", $8
    printf "}"
}
END {
    print "\n]"
}' "$csvFilePath" | tr -d '\r')

# JSONデータをファイルに出力
echo "$jsonData" > "$jsonFilePath"

echo "JSON data created in $jsonFilePath"

# 大人向けの問題
csvFilePath="Question.csv" # CSVファイルのパスを指定
jsonFilePath="adultQuestion.json"

# CSVファイルを読み込み、JSON形式に変換
jsonData=$(awk -F, '
BEGIN {
    print "["
}
NR > 1 {
    if (NR > 2) {
        printf ",\n"
    }
    printf "{\n"
    printf "  \"id\": %d,\n", NR-1
    printf "  \"text\": \"%s\",\n", $1
    printf "  \"options\": [\"%s\", \"%s\", \"%s\", \"%s\"],\n", $2, $3, $4, $5
    printf "  \"correctAnswer\": %d,\n", $6 - 1
    printf "  \"explanation\": \"%s\",\n", $7
    printf "  \"explanationImage\": \"%s\"\n", $8
    printf "}"
}
END {
    print "\n]"
}' "$csvFilePath" | tr -d '\r')

# JSONデータをファイルに出力
echo "$jsonData" > "$jsonFilePath"

echo "JSON data created in $jsonFilePath"
