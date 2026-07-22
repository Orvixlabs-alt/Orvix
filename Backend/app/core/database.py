import sqlite3

DB_NAME = "orvix.db"


def get_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS chats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            role TEXT NOT NULL,
            message TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


def save_message(role: str, message: str):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO chats (role, message) VALUES (?, ?)",
        (role, message)
    )

    conn.commit()
    conn.close()


def get_chat_history(limit=20):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT role, message
        FROM chats
        ORDER BY id DESC
        LIMIT ?
        """,
        (limit,)
    )

    rows = cursor.fetchall()
    conn.close()

    rows.reverse()

    return [
        {
            "role": row["role"],
            "content": row["message"]
        }
        for row in rows
    ]


def clear_chat_history():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM chats")

    conn.commit()
    conn.close()