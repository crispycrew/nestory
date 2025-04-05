import pymysql

connection = pymysql.connect(
    host="localhost",
    user="",
    password="",
    database="nestory",
    cursorclass=pymysql.cursors.DictCursor
)

try:
    with connection.cursor() as cursor:
        # 테이블이 없다면 생성
        create_table_sql = """
        CREATE TABLE IF NOT EXISTS texts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            content TEXT NOT NULL
        )
        """
        cursor.execute(create_table_sql)

        # 텍스트 삽입
        insert_sql = "INSERT INTO texts (content) VALUES (%s)"
        text_data = "이건 pymysql로 저장한 텍스트입니다!"
        cursor.execute(insert_sql, (text_data,))

    # 3. 커밋
    connection.commit()
    print("✅ 텍스트 저장 완료!")

finally:
    connection.close()
