export const rolesData = [
    {
        "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        "name": "Administrator",
        "description": "Повний доступ до всіх функцій системи. Може керувати користувачами, ролями та налаштуваннями.",
        "permissions": {
            "users": ["create", "read", "update", "delete"],
            "roles": ["create", "read", "update", "delete"],
            "settings": ["read", "update"],
            "content": ["create", "read", "update", "delete", "publish"]
        },
        "createdAt": "2024-01-10T10:00:00Z",

    },
    {
        "id": "b2c3d4e5-f6a7-8901-2345-67890abcdef0",
        "name": "Editor",
        "description": "Може створювати, редагувати та публікувати контент. Не має доступу до керування користувачами чи налаштуваннями.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": [],
            "content": ["create", "read", "update", "publish"]
        },
        "createdAt": "2024-01-15T11:30:00Z",

    },
    {
        "id": "c3d4e5f6-a7b8-9012-3456-7890abcdef01",
        "name": "Viewer",
        "description": "Має доступ тільки для перегляду опублікованого контенту.",
        "permissions": {
            "users": [],
            "roles": [],
            "settings": [],
            "content": ["read"]
        },
        "createdAt": "2024-02-01T08:00:00Z",

    },
    {
        "id": "d4e5f6a7-b8c9-0123-4567-890abcdef012",
        "name": "Moderator",
        "description": "Може модерувати коментарі та контент користувачів, блокувати користувачів.",
        "permissions": {
            "users": ["read", "update"], // Може оновлювати статус користувача (напр. заблокувати)
            "roles": [],
            "settings": [],
            "content": ["read", "update", "delete"] // Може редагувати/видаляти чужий контент (напр. коментарі)
        },
        "createdAt": "2024-03-05T14:00:00Z",

    },
    {
        "id": "e5f6a7b8-c9d0-1234-5678-90abcdef1234",
        "name": "Content Manager",
        "description": "Відповідає за управління структурою сайту та контентом, але не має права публікувати.",
        "permissions": {
            "users": [],
            "roles": [],
            "settings": ["read"],
            "content": ["create", "read", "update"]
        },
        "createdAt": "2024-04-01T09:30:00Z"
    },
    {
        "id": "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
        "name": "Support",
        "description": "Може відповідати на запити користувачів та мати обмежений доступ до даних користувачів.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": [],
            "content": ["read"]
        },
        "createdAt": "2024-04-05T13:00:00Z"
    },
    {
        "id": "a7b8c9d0-e1f2-3456-7890-abcdef123456",
        "name": "Analyst",
        "description": "Має доступ до звітів та аналітики, але не може змінювати контент.",
        "permissions": {
            "users": [],
            "roles": [],
            "settings": ["read"],
            "content": ["read"]
        },
        "createdAt": "2024-04-10T08:15:00Z"
    },
    {
        "id": "b8c9d0e1-f2a3-4567-890a-bcdef1234567",
        "name": "SEO Specialist",
        "description": "Може редагувати метадані та інші SEO-налаштування контенту.",
        "permissions": {
            "users": [],
            "roles": [],
            "settings": ["read"],
            "content": ["read", "update"]
        },
        "createdAt": "2024-04-15T15:45:00Z"
    },
    {
        "id": "c9d0e1f2-a3b4-5678-90ab-cdef12345678",
        "name": "Translator",
        "description": "Може перекладати контент.",
        "permissions": {
            "users": [],
            "roles": [],
            "settings": [],
            "content": ["read", "update"]
        },
        "createdAt": "2024-04-20T10:30:00Z"
    },
    {
        "id": "d0e1f2a3-b4c5-6789-0abc-def123456789",
        "name": "Social Media Manager",
        "description": "Може публікувати контент у соціальних мережах та відстежувати статистику.",
        "permissions": {
            "users": [],
            "roles": [],
            "settings": [],
            "content": ["read", "publish"]
        },
        "createdAt": "2024-04-25T17:00:00Z"
    },
    {
        "id": "e1f2a3b4-c5d6-7890-abcd-ef1234567890",
        "name": "Billing Manager",
        "description": "Має доступ до інформації про платежі та може керувати підписками.",
        "permissions": {
            "users": ["read", "update"], // Може оновлювати платіжну інформацію
            "roles": [],
            "settings": ["read"],
            "billing": ["read", "update"]
        },
        "createdAt": "2024-05-01T09:00:00Z"
    },
    {
        "id": "f2a3b4c5-d6e7-890a-bcde-f12345678901",
        "name": "Developer",
        "description": "Має повний доступ до технічних налаштувань та коду.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": ["read", "update"],
            "code": ["read", "write", "execute"],
            "deploy": ["read", "execute"]
        },
        "createdAt": "2024-05-05T14:30:00Z"
    },
    {
        "id": "a3b4c5d6-e7f8-90ab-cdef-123456789012",
        "name": "Marketing Manager",
        "description": "Відповідає за маркетингові кампанії та аналітику.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": ["read"],
            "marketing": ["create", "read", "update", "delete"],
            "analytics": ["read"]
        },
        "createdAt": "2024-05-10T11:15:00Z"
    },
    {
        "id": "b4c5d6e7-f8a9-0abc-def1-234567890123",
        "name": "Sales Representative",
        "description": "Може переглядати інформацію про клієнтів та створювати нові угоди.",
        "permissions": {
            "users": ["read", "create"],
            "roles": [],
            "settings": [],
            "customers": ["read", "create"],
            "deals": ["create", "read", "update"]
        },
        "createdAt": "2024-05-15T16:45:00Z"
    },
    {
        "id": "c5d6e7f8-a9b0-bcde-f123-456789012345",
        "name": "Product Manager",
        "description": "Відповідає за розробку та управління продуктами.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": ["read"],
            "products": ["create", "read", "update"]
        },
        "createdAt": "2024-05-20T10:00:00Z"
    },
    {
        "id": "d6e7f8a9-b0c1-def1-2345-678901234567",
        "name": "Human Resources",
        "description": "Має доступ до інформації про співробітників та може керувати їхніми профілями.",
        "permissions": {
            "users": ["read", "update"],
            "roles": [],
            "settings": ["read"],
            "employees": ["read", "update"]
        },
        "createdAt": "2024-05-25T13:30:00Z"
    },
    {
        "id": "e7f8a9b0-c1d2-ef12-3456-789012345678",
        "name": "Finance Manager",
        "description": "Має повний доступ до фінансової звітності та операцій.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": ["read"],
            "finance": ["create", "read", "update", "delete"]
        },
        "createdAt": "2024-05-30T09:45:00Z"
    },
    {
        "id": "f8a9b0c1-d2e3-f123-4567-890123456789",
        "name": "Customer Success Manager",
        "description": "Відповідає за підтримку та успіх клієнтів.",
        "permissions": {
            "users": ["read", "update"],
            "roles": [],
            "settings": [],
            "customers": ["read", "update"],
            "support": ["create", "read", "update"]
        },
        "createdAt": "2024-06-05T15:00:00Z"
    },
    {
        "id": "a9b0c1d2-e3f4-1234-5678-901234567890",
        "name": "Legal Counsel",
        "description": "Має доступ до юридичних документів та може керувати ними.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": ["read"],
            "legal": ["create", "read", "update"]
        },
        "createdAt": "2024-06-10T11:00:00Z"
    },
    {
        "id": "b0c1d2e3-f4a5-2345-6789-012345678901",
        "name": "Compliance Officer",
        "description": "Відповідає за дотримання нормативних вимог та політик.",
        "permissions": {
            "users": ["read"],
            "roles": [],
            "settings": ["read"],
            "compliance": ["read", "update"]
        },
        "createdAt": "2024-06-15T16:30:00Z"
    }
];