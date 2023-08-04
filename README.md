# ATH-191
POC - Activity Dashboard charts

## Data Contracts

### Unique Logins Chart

#### Structure 
```json
[
  {
    "name": "Admin",
    "y": 2054,
  },
  {
    "name": "Student",
    "y": 5000,
  },
  {
    "name": "Teacher",
    "y": 4000,
  },
  {
    "name": "Family",
    "y": 200,
  }
]
```

#### Description
```
  name: User type
  y: how many times users with that type loged in the app
```


### Unique Logins by Site Chart

#### Structure 
```json
{
	"admin": [
		{
	    "name": "Wayside High School",
	    "y": 100,
	  },
	  ...
	],
	"teacher": [
		{
	    "name": "Wayside High School",
	    "y": 500,
	  },
	  ...
	],
	"student": [
		{
	    "name": "Wayside High School",
	    "y": 2000,
	  },
	  ...
	],
	"family": [
		{
	    "name": "Wayside High School",
	    "y": 300,
	  },
	  ...
	],
}
```

#### Description
```
  name: Site name
  y: how many times users of that type in the specific site that type loged in the app
```

### Unique Logins Over Time Chart

#### Structure 
```json
{
	"admin": [
		{
	    "x": "2023-08-01",
	    "y": 100,
	  },
	  ...
	],
	"teacher": [
		{
	    "x": "2023-08-01",
	    "y": 500,
	  },
	  ...
	],
	"student": [
		{
	    "x": "2023-08-01",
	    "y": 2000,
	  },
	  ...
	],
	"family": [
		{
	    "x": "2023-08-01",
	    "y": 300,
	  },
	  ...
	],
}
```

#### Description
```
  x: Date
  y: how many times users of that type loged in the app in this specific date
```

### Assessments Over Time Chart

#### Structure 
```json
{
	"assigned": [
		{
	    "x": "2023-08-01",
	    "y": 100,
	  },
	  ...
	],
	"graded": [
		{
	    "x": "2023-08-01",
	    "y": 500,
	  },
	  ...
	],
}
```

#### Description
```
  x: Date
  y: how many times assessments were assigned/graded on that date
```

### Assessments Over Time by Type Chart

#### Structure 
```json
{
	"advanced": [
		{
	    "x": "2023-08-01",
	    "y": 100,
	  },
	  ...
	],
	"rubric": [
		{
	    "x": "2023-08-01",
	    "y": 500,
	  },
	  ...
	],
	"simple": [
		{
	    "x": "2023-08-01",
	    "y": 500,
	  },
	  ...
	],
}
```

#### Description
```
  x: Date
  y: how many times assessments of the specific type were assigned on that date
```

### Most Assessed Standards Chart

#### Structure 
```json
[
  {
    "name": "Standard 1",
    "value": 800,
    "description": "Standard 1 description",
  },
  {
    "name": "Standard 2",
    "value": 300,
    "description": "Standard 2 description",
  },
  ...
]
```

#### Description
```
  name: Standard Title
  value: how many times the standard was attempted
  description: Standard description
```

### Standards Attempts Over Time Chart

#### Structure 
```json
[

  {
    "y": 180,
    "x": "2023-01-01",
  },
  ...
]
```

#### Description
```
  x: Date
  y: How many times standard was attempted on that date
```

### Plans With Recently Added Students Chart

#### Structure 
```json
[
  {
    "name": "Positive Supports",
    "y": 330,
  },
  ...
],
```

#### Description
```
  name: Plans name
  y: Number of students added to that Plan
```

### Plans Updated Over Time Chart

#### Structure 
```json
[
  {
    "x": "2023-01-02",
    "y": 330,
  },
  ...
],
```

#### Description
```
  x: Date
  y: Number of plans updated on that day
```

### Students Exited from Plans Chart

#### Structure 
```json
{
  "removed": [
    {
      "y": 50,
      "x": "2023-01-01",
    },
    ...
  ],
  "completed": [
    {
      "y": 150,
      "x": "2023-01-01",
    },
  ],
}
```

#### Description
```
  x: Date
  y: Number of students that were removed or completed plans
```