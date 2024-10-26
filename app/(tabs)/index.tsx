import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Halo,</Text>
        <Text style={styles.description}>Ari Setiawan</Text>
        <Text style={styles.NIM}>( 22.51.0010 )</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconItem}>
          <Icon name="assignment" size={45} color="black" />
          <Text style={styles.iconLabel}>KRS</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="grade" size={45} color="black" />
          <Text style={styles.iconLabel}>Nilai</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="check-circle" size={45} color="black" />
          <Text style={styles.iconLabel}>Presensi</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="inbox" size={45} color="black" />
          <Text style={styles.iconLabel} />
        </View>
      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleTitle}>Jadwal Kuliah</Text>
        <Text style={styles.scheduleText}>Jadwal kuliah tidak tersedia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
  description: {
    fontSize: 36,
    textAlign: 'left',
    fontWeight : 'bold',
    marginBottom: 10,
  },
  NIM: {
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 10,
    color: 'blue',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 35,
  },
  iconItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 18,
    color: 'black',
  },
  scheduleContainer: {
    marginTop: 30,
    alignItems: 'flex-start',
  },
  scheduleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  scheduleText: {
    fontSize: 20,
    color: 'gray',
  },
});
